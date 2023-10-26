const { AuthenticationError } = require('apollo-server-express');
const { User, Workout, Set } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    getUser: async (_, { id }, context) => {
      if (context.user) {
        return await User.findById(id);
      }
      throw new AuthenticationError('Not logged in');
    },
    getWorkout: async (_, { id }, context) => {
      if (context.user) {
        return await Workout.findById(id).populate('sets');
      }
      throw new AuthenticationError('Not logged in');
    },
  },
  Mutation: {
    createUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    createWorkout: async (_, { userId, date, sets }, context) => {
      if (context.user) {
        const workout = await Workout.create({ userId, date, sets });
        return await Workout.findById(workout._id).populate('sets');
      }
      throw new AuthenticationError('Not logged in');
    },
    createSet: async (_, { exercise, repetitions, weight, duration, notes }) => {
      return await Set.create({ exercise, repetitions, weight, duration, notes });
    },
  },
};

module.exports = resolvers;
