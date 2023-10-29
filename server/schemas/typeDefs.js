const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    workouts: [Workout]
    loggedWorkouts: [Workout]
  }

  type Workout {
    _id: ID!
    date: String
    name: String!
    exercises: [Exercise]
  }

  type Exercise {
    _id: ID!
    exercise: String!
    sets: [Set]
  }

  type Set {
    _id: ID!
    onerepmax: Int
    Date: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(id: ID!): User
    workout(id: ID!): Workout
  }

  type Mutation {
    loginUser(username: String!, password: String!): Auth
    createUser(username: String!, password: String!): User
    addWorkout(userId: ID!, name: String!, date: String, exercises: [ID]!): Workout
    addExercise(workoutId: ID!, exercise: String!): Exercise
    addSet(exerciseId: ID!, onerepmax: Int!, Date: String): Set
  }
`;

module.exports = typeDefs;
