const { AuthenticationError } = require('apollo-server-express');
<<<<<<< HEAD
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
=======
const { User, Workout, Exercise, Set } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { username, password }) => {
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
    }
  }
};

module.exports = resolvers;
>>>>>>> 3f40ac9381a5439445ba0c718233a2bc1f490fdd
