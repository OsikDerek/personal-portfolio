import { db } from '../server/db';
import { coachingPrograms } from '../shared/schema';
import { eq } from 'drizzle-orm';
import { log } from '../server/vite';

async function removeCampProgram() {
  log('Removing Youth Hockey Camp program...', 'db:update');
  
  try {
    // Find the camp program - we're looking for the one with "Youth Hockey Camp" in the name
    const campPrograms = await db.select()
      .from(coachingPrograms)
      .where(eq(coachingPrograms.name, 'Youth Hockey Camp'));
    
    if (campPrograms.length === 0) {
      log('No Youth Hockey Camp program found', 'db:update');
      return;
    }
    
    // Delete the camp program
    const deleted = await db.delete(coachingPrograms)
      .where(eq(coachingPrograms.name, 'Youth Hockey Camp'))
      .returning();
    
    log(`Successfully removed ${deleted.length} camp program(s)`, 'db:update');
  } catch (error) {
    log(`Error removing camp program: ${error}`, 'db:update');
    throw error;
  }
}

// Execute immediately
removeCampProgram()
  .then(() => {
    console.log('Program removal completed successfully');
    process.exit(0);
  })
  .catch(error => {
    console.error('Error:', error);
    process.exit(1);
  });