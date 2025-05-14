import { 
  users, 
  type User, 
  type InsertUser, 
  type ClientProfile, 
  type InsertClientProfile,
  type CoachingProgram,
  type InsertCoachingProgram,
  type CoachingSession,
  type InsertCoachingSession,
  clientProfiles,
  coachingPrograms,
  coachingSessions
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Client profile methods
  getClientProfile(id: number): Promise<ClientProfile | undefined>;
  getClientProfileByUserId(userId: number): Promise<ClientProfile | undefined>;
  createClientProfile(profile: InsertClientProfile): Promise<ClientProfile>;
  updateClientProfile(id: number, profile: Partial<InsertClientProfile>): Promise<ClientProfile | undefined>;
  
  // Coaching programs methods
  getCoachingProgram(id: number): Promise<CoachingProgram | undefined>;
  getAllCoachingPrograms(activeOnly?: boolean): Promise<CoachingProgram[]>;
  createCoachingProgram(program: InsertCoachingProgram): Promise<CoachingProgram>;
  updateCoachingProgram(id: number, program: Partial<InsertCoachingProgram>): Promise<CoachingProgram | undefined>;
  
  // Coaching sessions methods
  getCoachingSession(id: number): Promise<CoachingSession | undefined>;
  getClientSessions(clientId: number): Promise<CoachingSession[]>;
  createCoachingSession(session: InsertCoachingSession): Promise<CoachingSession>;
  updateCoachingSession(id: number, session: Partial<InsertCoachingSession>): Promise<CoachingSession | undefined>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }
  
  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  
  // Client profile methods
  async getClientProfile(id: number): Promise<ClientProfile | undefined> {
    const [profile] = await db.select().from(clientProfiles).where(eq(clientProfiles.id, id));
    return profile;
  }
  
  async getClientProfileByUserId(userId: number): Promise<ClientProfile | undefined> {
    const [profile] = await db.select().from(clientProfiles).where(eq(clientProfiles.userId, userId));
    return profile;
  }
  
  async createClientProfile(profile: InsertClientProfile): Promise<ClientProfile> {
    const [newProfile] = await db.insert(clientProfiles).values(profile).returning();
    return newProfile;
  }
  
  async updateClientProfile(id: number, profile: Partial<InsertClientProfile>): Promise<ClientProfile | undefined> {
    const [updatedProfile] = await db
      .update(clientProfiles)
      .set({ ...profile, updatedAt: new Date() })
      .where(eq(clientProfiles.id, id))
      .returning();
    return updatedProfile;
  }
  
  // Coaching programs methods
  async getCoachingProgram(id: number): Promise<CoachingProgram | undefined> {
    const [program] = await db.select().from(coachingPrograms).where(eq(coachingPrograms.id, id));
    return program;
  }
  
  async getAllCoachingPrograms(activeOnly: boolean = true): Promise<CoachingProgram[]> {
    if (activeOnly) {
      return db.select().from(coachingPrograms).where(eq(coachingPrograms.active, true));
    }
    return db.select().from(coachingPrograms);
  }
  
  async createCoachingProgram(program: InsertCoachingProgram): Promise<CoachingProgram> {
    const [newProgram] = await db.insert(coachingPrograms).values(program).returning();
    return newProgram;
  }
  
  async updateCoachingProgram(id: number, program: Partial<InsertCoachingProgram>): Promise<CoachingProgram | undefined> {
    const [updatedProgram] = await db
      .update(coachingPrograms)
      .set({ ...program, updatedAt: new Date() })
      .where(eq(coachingPrograms.id, id))
      .returning();
    return updatedProgram;
  }
  
  // Coaching sessions methods
  async getCoachingSession(id: number): Promise<CoachingSession | undefined> {
    const [session] = await db.select().from(coachingSessions).where(eq(coachingSessions.id, id));
    return session;
  }
  
  async getClientSessions(clientId: number): Promise<CoachingSession[]> {
    return db.select().from(coachingSessions).where(eq(coachingSessions.clientId, clientId));
  }
  
  async createCoachingSession(session: InsertCoachingSession): Promise<CoachingSession> {
    const [newSession] = await db.insert(coachingSessions).values(session).returning();
    return newSession;
  }
  
  async updateCoachingSession(id: number, session: Partial<InsertCoachingSession>): Promise<CoachingSession | undefined> {
    const [updatedSession] = await db
      .update(coachingSessions)
      .set({ ...session, updatedAt: new Date() })
      .where(eq(coachingSessions.id, id))
      .returning();
    return updatedSession;
  }
}

export const storage = new DatabaseStorage();
