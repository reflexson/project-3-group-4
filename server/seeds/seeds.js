const mongoose = require('mongoose');
const Workout = require('./models/Workout');
mongoose.connect('mongodb://localhost:27017/fitness_app', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Sample exercises
const exercises = [
  'Push-ups',
  'Pull-ups',
  'Squats',
  'Bench Press',
  'Lunges',
  'Planks',
  'Deadlifts',
  'Bicep Curls',
  'Tricep Dips',
  'Shoulder Press',
  
];

// generate random duration for workouts (in seconds) between 30 and 60 seconds
const getRandomDuration = () => Math.floor(Math.random() * 31) + 30;

// generate random number of reps between 5 and 12
const getRandomReps = () => Math.floor(Math.random() * 8) + 5;

// generate random number of sets between 3 and 5
const getRandomSets = () => Math.floor(Math.random() * 3) + 3;

// Seed the database with sample workout data
const seedWorkouts = async () => {
  await Workout.deleteMany(); // Clear existing workouts

  try {
    // Create sample workouts for each exercise
    for (const exercise of exercises) {
      const workout = new Workout({
        exercise,
        duration: getRandomDuration(),
        sets: getRandomSets(),
        reps: getRandomReps(),
        date: new Date()
      });
      await workout.save();
    }

    console.log('Sample workouts seeded successfully!');
  } catch (error) {
    console.error('Error seeding sample workouts:', error);
  } finally {
    // Close the database connection after seeding
    db.close();
  }
};

seedWorkouts();
