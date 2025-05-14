import { db } from '../server/db';
import { coachingPrograms, coachingProgramTypeEnum } from '../shared/schema';
import { log } from '../server/vite';
import { sql } from 'drizzle-orm';

// Define program types based on the enum
type ProgramType = typeof coachingProgramTypeEnum.enumValues[number];

// Sample coaching programs data
const samplePrograms = [
  {
    name: 'Elite Skating Development',
    description: 'Intensive one-on-one skating training focusing on edge work, power, and technical refinement for competitive hockey players.',
    type: 'one_on_one' as ProgramType,
    duration: 60, // minutes
    price: 12500, // $125.00
    active: true
  },
  {
    name: 'Small Group Skills Session',
    description: 'Develop puck handling, shooting, and game situation skills in a 3-5 player group environment with personalized attention.',
    type: 'group' as ProgramType,
    duration: 90, // minutes
    price: 8500, // $85.00
    active: true
  },
  {
    name: 'Youth Hockey Camp',
    description: 'Week-long day camp for youth players covering all aspects of hockey development - skating, skills, game awareness, and off-ice training.',
    type: 'camp' as ProgramType,
    duration: 300, // 5 hours
    price: 19900, // $199.00
    active: true
  },
  {
    name: 'Video Analysis & Strategy Session',
    description: 'Online video review of your game footage with detailed feedback and personalized improvement strategies.',
    type: 'online' as ProgramType,
    duration: 45, // minutes
    price: 7500, // $75.00
    active: true
  },
  {
    name: 'Hockey IQ Workshop',
    description: 'Learn to see the game at a higher level with drills and exercises designed to improve decision-making and game awareness.',
    type: 'workshop' as ProgramType,
    duration: 120, // 2 hours
    price: 9900, // $99.00
    active: true
  }
];

async function seedCoachingPrograms() {
  log('Seeding coaching programs...', 'db:seed');
  
  try {
    // Check if programs already exist
    const existingPrograms = await db.select({ count: sql<number>`count(${coachingPrograms.id})` })
      .from(coachingPrograms);
    
    if (existingPrograms[0].count > 0) {
      log(`Database already has ${existingPrograms[0].count} coaching programs`, 'db:seed');
      return;
    }
    
    // Insert programs
    const insertedPrograms = await db.insert(coachingPrograms)
      .values(samplePrograms)
      .returning();
    
    log(`Successfully seeded ${insertedPrograms.length} coaching programs`, 'db:seed');
  } catch (error) {
    log(`Error seeding coaching programs: ${error}`, 'db:seed');
    throw error;
  }
}

// Execute immediately
seedCoachingPrograms()
  .then(() => {
    console.log('Seeding completed successfully');
    process.exit(0);
  })
  .catch(error => {
    console.error('Seed error:', error);
    process.exit(1);
  });

export { seedCoachingPrograms };