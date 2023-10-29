const { AuthenticationError } = require('apollo-server-express');
const { User, Workout, Exercise, Set } = require('../models'); 
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
    createExercise: async (parent, {exercise}, context) => {
      try {
        const exercise = await Exercise.create(args);
       
        return { exercise };
      } catch (error) {
        console.error('Error creating exercise:', error);
        throw new Error('Error creating exercise');
      }
    },
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
      console.log("loginUser resolver triggered");
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      // Debug logs
      console.log('Inputted Password:', password);
      console.log('Stored Hashed Password:', user.password);
      console.log('Password Match:', correctPw);

      if (!correctPw) {
        throw new AuthenticationError('Password mismatch');
      }

      const token = signToken(user);
      return { token, user };
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

    
    addWorkout: async (parent, {workoutData}, context) =>{
      if(context.user){
        const updatedUser= await User.findOneAndUpdate(
          {_id:context.user._id}, 
          {$push:{workouts: workoutData}},
          {new: true}
        );    
        return updatedUser;
      }
    }
  },
};

module.exports = resolvers;
