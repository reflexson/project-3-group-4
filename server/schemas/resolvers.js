const { AuthenticationError } = require('apollo-server-express');
const { User, Workout, Exercise, Set } = require('../models'); 
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (_, { id }) => {
      return await User.findById(id).populate('workouts');
    },
    workout: async (_, { id }) => {
      return await Workout.findById(id).populate('exercises');
    },
  },

  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    loginUser: async (_, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Password mismatch');
      }

      const token = signToken(user);
      return { token, user };
    },

    createExercise: async (parent, { exerciseName }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }

      const newExercise = await Exercise.create({ exercise: exerciseName });
      const user = await User.findByIdAndUpdate(context.user._id, { $push: { workouts: newExercise._id } }, { new: true });
      
      return newExercise;
    },

    createWorkout: async (parent, { title }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }
    
      const newWorkout = await Workout.create({ title });
      const user = await User.findByIdAndUpdate(context.user._id, { $push: { workouts: newWorkout._id } }, { new: true });
    
      return newWorkout;
    },

    addExerciseToUserWorkout: async (parent, { workoutId, exerciseData }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }

      const newExercise = await Exercise.create(exerciseData);
      const user = await User.findById(context.user._id);
      const workout = user.workouts.id(workoutId);

      if (!workout) {
        throw new Error('Workout not found');
      }
      
      workout.exercises.push(newExercise);
      await user.save();

      return user;
    },

    addSet: async (parent, args, context) => {
      const newSet = await Set.create(args);
      return newSet;
    },

    updateSet: async (parent, { id, reps, weight, distance }, context) => {
      const updatedSet = await Set.findByIdAndUpdate(id, { reps, weight, distance }, { new: true });
      return updatedSet;
    },

    deleteSet: async (parent, { id }, context) => {
      const deletedSet = await Set.findByIdAndDelete(id);
      return deletedSet;
    },

    addWorkout: async (parent, { workoutData }, context) => {
      if (!context.user) {
        throw new AuthenticationError('You need to be logged in!');
      }
      // create a new workout in the Workout collection.
      const newWorkout = await Workout.create(workoutData);
      // update the user's workouts array by pushing the new workout's ID.
      const updatedUser = await User.findByIdAndUpdate(
        context.user._id,
        { $push: { workouts: newWorkout._id } },
        { new: true }
      );
      // Return the newly created workout.
      return newWorkout;
    }
  }
};

module.exports = resolvers;
