import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertCoachingProgramSchema, insertClientProfileSchema, insertCoachingSessionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Basic error handling middleware
  const asyncHandler = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };

  // Contact form handling
  app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Validate inputs
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    // Here you would typically send an email or store the contact message
    // For now, just return success
    return res.status(200).json({ 
      message: 'Contact form submitted successfully',
      data: { name, email, subject }
    });
  });

  // ===== COACHING PROGRAMS API =====
  // Get all active coaching programs
  app.get('/api/programs', asyncHandler(async (req, res) => {
    const activeOnly = req.query.activeOnly !== 'false';
    const programs = await storage.getAllCoachingPrograms(activeOnly);
    return res.status(200).json({ programs });
  }));

  // Get a specific program
  app.get('/api/programs/:id', asyncHandler(async (req, res) => {
    const programId = parseInt(req.params.id);
    if (isNaN(programId)) {
      return res.status(400).json({ message: 'Invalid program ID' });
    }

    const program = await storage.getCoachingProgram(programId);
    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }

    return res.status(200).json({ program });
  }));

  // Create a new coaching program
  app.post('/api/programs', asyncHandler(async (req, res) => {
    try {
      const programData = insertCoachingProgramSchema.parse(req.body);
      const newProgram = await storage.createCoachingProgram(programData);
      return res.status(201).json({ 
        message: 'Program created successfully',
        program: newProgram 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: 'Invalid program data', 
          errors: error.errors 
        });
      }
      throw error;
    }
  }));

  // Update a coaching program
  app.patch('/api/programs/:id', asyncHandler(async (req, res) => {
    const programId = parseInt(req.params.id);
    if (isNaN(programId)) {
      return res.status(400).json({ message: 'Invalid program ID' });
    }

    try {
      // Partial validation, allow subset of fields
      const updateData = insertCoachingProgramSchema.partial().parse(req.body);
      const updatedProgram = await storage.updateCoachingProgram(programId, updateData);
      
      if (!updatedProgram) {
        return res.status(404).json({ message: 'Program not found' });
      }

      return res.status(200).json({ 
        message: 'Program updated successfully',
        program: updatedProgram 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: 'Invalid program data', 
          errors: error.errors 
        });
      }
      throw error;
    }
  }));

  // ===== CLIENT PROFILES API =====
  // Get a client profile
  app.get('/api/clients/:id', asyncHandler(async (req, res) => {
    const clientId = parseInt(req.params.id);
    if (isNaN(clientId)) {
      return res.status(400).json({ message: 'Invalid client ID' });
    }

    const client = await storage.getClientProfile(clientId);
    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }

    return res.status(200).json({ client });
  }));

  // Create a client profile
  app.post('/api/clients', asyncHandler(async (req, res) => {
    try {
      const clientData = insertClientProfileSchema.parse(req.body);
      const newClient = await storage.createClientProfile(clientData);
      return res.status(201).json({ 
        message: 'Client profile created successfully',
        client: newClient 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: 'Invalid client data', 
          errors: error.errors 
        });
      }
      throw error;
    }
  }));

  // Update a client profile
  app.patch('/api/clients/:id', asyncHandler(async (req, res) => {
    const clientId = parseInt(req.params.id);
    if (isNaN(clientId)) {
      return res.status(400).json({ message: 'Invalid client ID' });
    }

    try {
      // Partial validation, allow subset of fields
      const updateData = insertClientProfileSchema.partial().parse(req.body);
      const updatedClient = await storage.updateClientProfile(clientId, updateData);
      
      if (!updatedClient) {
        return res.status(404).json({ message: 'Client not found' });
      }

      return res.status(200).json({ 
        message: 'Client profile updated successfully',
        client: updatedClient 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: 'Invalid client data', 
          errors: error.errors 
        });
      }
      throw error;
    }
  }));

  // ===== COACHING SESSIONS API =====
  // Get client's sessions
  app.get('/api/clients/:clientId/sessions', asyncHandler(async (req, res) => {
    const clientId = parseInt(req.params.clientId);
    if (isNaN(clientId)) {
      return res.status(400).json({ message: 'Invalid client ID' });
    }

    const client = await storage.getClientProfile(clientId);
    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }

    const sessions = await storage.getClientSessions(clientId);
    return res.status(200).json({ sessions });
  }));

  // Book a coaching session
  app.post('/api/sessions', asyncHandler(async (req, res) => {
    try {
      const sessionData = insertCoachingSessionSchema.parse(req.body);
      
      // Check if client exists
      const client = await storage.getClientProfile(sessionData.clientId);
      if (!client) {
        return res.status(404).json({ message: 'Client not found' });
      }
      
      // Check if program exists
      const program = await storage.getCoachingProgram(sessionData.programId);
      if (!program) {
        return res.status(404).json({ message: 'Coaching program not found' });
      }
      
      const newSession = await storage.createCoachingSession(sessionData);
      return res.status(201).json({ 
        message: 'Session booked successfully',
        session: newSession 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: 'Invalid session data', 
          errors: error.errors 
        });
      }
      throw error;
    }
  }));

  // Update a session (reschedule, cancel, etc.)
  app.patch('/api/sessions/:id', asyncHandler(async (req, res) => {
    const sessionId = parseInt(req.params.id);
    if (isNaN(sessionId)) {
      return res.status(400).json({ message: 'Invalid session ID' });
    }

    try {
      // Partial validation, allow subset of fields
      const updateData = insertCoachingSessionSchema.partial().parse(req.body);
      const updatedSession = await storage.updateCoachingSession(sessionId, updateData);
      
      if (!updatedSession) {
        return res.status(404).json({ message: 'Session not found' });
      }

      return res.status(200).json({ 
        message: 'Session updated successfully',
        session: updatedSession 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: 'Invalid session data', 
          errors: error.errors 
        });
      }
      throw error;
    }
  }));

  const httpServer = createServer(app);

  return httpServer;
}
