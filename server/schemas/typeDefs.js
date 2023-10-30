const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String!
    lastName: String!
    username: String!
    workouts: [Workout]
    loggedWorkouts: [Workout]
  }

  type Workout {
    _id: ID
    title: String
    date: String
    exercises: [Exercise]
  }

  type Exercise {
    _id: ID
    exercise: String
    sets: [Set]
  }
  
  type Set {
    _id: ID
    reps: Int
    weight: Float
    distance: Float
  }

  input ExerciseInput {
    exercise: String!
    sets: [SetInput]
  }
  
  input SetInput {
    reps: Int
    weight: Float
    distance: Float
  }

  input WorkoutInput {
    title: String!
    date: String!
    exercises: [ExerciseInput]
  }
  
  type Auth {
    token: ID
    user: User
  }

  type Query {
    user(id: ID!): User
    workout(id: ID!): Workout
    exercise(id: ID!): Exercise
  }
  
  type Mutation {
    createUser(firstName: String, lastName: String, username: String!, password: String!): Auth
    createWorkout(title: String!): Workout
    createExercise(exerciseName: String!): Exercise
    addExerciseToWorkout(workoutId: ID!, exerciseId: ID!): Workout
    addExerciseToUserWorkout(userId: ID!, exerciseId: ID!): User
    addWorkout(workoutData: WorkoutInput!): User
    addSet(reps: Int!, weight: Float, distance: Float): Set
    updateSet(id: ID!, reps: Int, weight: Float, distance: Float): Set
    deleteSet(id: ID!): Set
    loginUser(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
