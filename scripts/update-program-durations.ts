import { db } from '../server/db';
import { coachingPrograms } from '../shared/schema';
import { eq } from 'drizzle-orm';
import { log } from '../server/vite';

async function updateProgramDurations() {
  log('Updating coaching program durations...', 'db:update');
  
  try {
    // Update Small Group Skills Session duration to 1 hour (60 minutes)
    await db.update(coachingPrograms)
      .set({ duration: 60 })
      .where(eq(coachingPrograms.name, 'Small Group Skills Session'))
      .returning();
    
    // Update Hockey IQ Workshop duration to 1 hour 30 minutes (90 minutes)
    await db.update(coachingPrograms)
      .set({ duration: 90 })
      .where(eq(coachingPrograms.name, 'Hockey IQ Workshop'))
      .returning();
    
    log('Successfully updated coaching program durations', 'db:update');
  } catch (error) {
    log(`Error updating program durations: ${error}`, 'db:update');
    throw error;
  }
}

// Execute the function
updateProgramDurations()
  .then(() => {
    console.log('Duration update completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Duration update failed:', error);
    process.exit(1);
  });