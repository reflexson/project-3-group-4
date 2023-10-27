const { AuthenticationError } = require('apollo-server-express');
const { User, Workout, Exercise, Set } = require('../models'); // Assuming you have models for Workout, Exercise, and Set.
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (_, { id }) => {
      return await User.findById(id);
    },
    workout: async (_, { id }) => {
      return await Workout.findById(id);
    },
  },
  Mutation: {
    createUser: async (parent, args, context) => {
      try {
        const user = await User.create(args);
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Error creating user');
      }
    },
    loginUser: async (_, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addSet: async (parent, args, context) => {
      // Placeholder logic
      const newSet = await Set.create(args);
      return newSet;
    },
    updateSet: async (parent, { id, reps, weight, distance }, context) => {
      // Placeholder logic
      const updatedSet = await Set.findByIdAndUpdate(id, { reps, weight, distance }, { new: true });
      return updatedSet;
    },
    deleteSet: async (parent, { id }, context) => {
      // Placeholder logic
      const deletedSet = await Set.findByIdAndDelete(id);
      return deletedSet;
    },
    // TODO: Add other mutation resolvers like updateUser, createExercise, etc.
  },
};

module.exports = resolvers;

