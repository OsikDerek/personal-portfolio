import { pgTable, text, serial, integer, boolean, timestamp, varchar, date, pgEnum } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

// User Authentication
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  fullName: text("full_name").notNull(),
  role: text("role").default("client").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
  fullName: true,
  role: true,
});

// Client Profile Information for Coaching
export const clientProfiles = pgTable("client_profiles", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  phone: varchar("phone", { length: 20 }),
  emergencyContact: varchar("emergency_contact", { length: 100 }),
  dateOfBirth: date("date_of_birth"),
  hockeyPosition: varchar("hockey_position", { length: 50 }),
  experienceLevel: varchar("experience_level", { length: 50 }),
  goals: text("goals"),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const clientProfileRelations = relations(clientProfiles, ({ one }) => ({
  user: one(users, {
    fields: [clientProfiles.userId],
    references: [users.id],
  }),
}));

export const insertClientProfileSchema = createInsertSchema(clientProfiles).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

// Coaching Products and Services
export const coachingProgramTypeEnum = pgEnum("coaching_program_type", [
  "one_on_one", 
  "group", 
  "camp", 
  "workshop", 
  "online"
]);

export const coachingPrograms = pgTable("coaching_programs", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  description: text("description").notNull(),
  type: coachingProgramTypeEnum("type").notNull(),
  price: integer("price").notNull(), // in cents
  duration: integer("duration").notNull(), // in minutes
  maxParticipants: integer("max_participants"),
  active: boolean("active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertCoachingProgramSchema = createInsertSchema(coachingPrograms).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

// Enrollments / Bookings
export const sessionStatusEnum = pgEnum("session_status", [
  "scheduled", 
  "completed", 
  "cancelled", 
  "rescheduled"
]);

export const coachingSessions = pgTable("coaching_sessions", {
  id: serial("id").primaryKey(),
  clientId: integer("client_id").references(() => clientProfiles.id).notNull(),
  programId: integer("program_id").references(() => coachingPrograms.id).notNull(),
  scheduledStart: timestamp("scheduled_start").notNull(),
  scheduledEnd: timestamp("scheduled_end").notNull(),
  status: sessionStatusEnum("status").default("scheduled").notNull(),
  notes: text("notes"),
  feedbackProvided: boolean("feedback_provided").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const coachingSessionRelations = relations(coachingSessions, ({ one }) => ({
  client: one(clientProfiles, {
    fields: [coachingSessions.clientId],
    references: [clientProfiles.id],
  }),
  program: one(coachingPrograms, {
    fields: [coachingSessions.programId],
    references: [coachingPrograms.id],
  }),
}));

export const insertCoachingSessionSchema = createInsertSchema(coachingSessions).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

// Export all types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertClientProfile = z.infer<typeof insertClientProfileSchema>;
export type ClientProfile = typeof clientProfiles.$inferSelect;

export type InsertCoachingProgram = z.infer<typeof insertCoachingProgramSchema>;
export type CoachingProgram = typeof coachingPrograms.$inferSelect;

export type InsertCoachingSession = z.infer<typeof insertCoachingSessionSchema>;
export type CoachingSession = typeof coachingSessions.$inferSelect;
