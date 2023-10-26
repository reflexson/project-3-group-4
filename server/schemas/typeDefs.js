const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    firstName: String!
    lastName: String!
  }
  
  type Set {
    id: ID!
    exercise: String!
    reps: Int!
    weight: Float
    distance: Float
  }
  
  type Workout {
    id: ID!
    userId: ID!
    date: String!
    sets: [Set!]!
  }
  
  type Auth {
    token: ID
    user: User
  }

  type Query {
    getUser(id: ID!): User
    getWorkout(id: ID!): Workout
  }
  
  type Mutation {
    addUser(firstName: String!, lastName: String!, password: String!): Auth
    createSet(exercise: String!, reps: Int!, weight: Float, distance: Float): Set
    updateSet(id: ID!, exercise: String, reps: Int, weight: Float, distance: Float): Set
    deleteSet(id: ID!): Set
  }
`;

module.exports = typeDefs;
