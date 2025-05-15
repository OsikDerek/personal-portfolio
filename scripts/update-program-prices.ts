import { db } from '../server/db';
import { coachingPrograms } from '../shared/schema';
import { eq } from 'drizzle-orm';
import { log } from '../server/vite';

async function updateProgramPrices() {
  log('Updating coaching program prices...', 'db:update');
  
  try {
    // Update Elite Skating Development price to $100
    await db.update(coachingPrograms)
      .set({ price: 10000 }) // $100.00
      .where(eq(coachingPrograms.name, 'Elite Skating Development'))
      .returning();
    
    // Update Small Group Skills Session price to $75
    await db.update(coachingPrograms)
      .set({ price: 7500 }) // $75.00
      .where(eq(coachingPrograms.name, 'Small Group Skills Session'))
      .returning();
    
    // Update Video Analysis price to $50
    await db.update(coachingPrograms)
      .set({ price: 5000 }) // $50.00
      .where(eq(coachingPrograms.name, 'Video Analysis & Strategy Session'))
      .returning();
    
    // Update Hockey IQ Workshop price to $100
    await db.update(coachingPrograms)
      .set({ price: 10000 }) // $100.00
      .where(eq(coachingPrograms.name, 'Hockey IQ Workshop'))
      .returning();
    
    log('Successfully updated coaching program prices', 'db:update');
  } catch (error) {
    log(`Error updating program prices: ${error}`, 'db:update');
    throw error;
  }
}

// Execute immediately
updateProgramPrices()
  .then(() => {
    console.log('Price update completed successfully');
    process.exit(0);
  })
  .catch(error => {
    console.error('Error:', error);
    process.exit(1);
  });