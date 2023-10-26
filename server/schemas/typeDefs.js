const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    workouts: [Workout]
    loggedWorkouts: [Workout]
  }

  type Workout {
    _id: ID
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
  
  type Auth {
    token: ID
    user: User
  }

  type Query {
    user(id: ID!): User
    workout(id: ID!): Workout
  }
  
  type Mutation {
    addUser(firstName: String!, lastName: String!, username: String!, password: String!): Auth
    addSet(reps: Int!, weight: Float, distance: Float): Set
    updateSet(id: ID!, reps: Int, weight: Float, distance: Float): Set
    deleteSet(id: ID!): Set
    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
