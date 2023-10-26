const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
  }
  
  type Set {
    id: ID!
    exercise: String!
    repetitions: Int!
    weight: Float
    duration: Int
  }
  
  type Workout {
    id: ID!
    userId: ID!
    date: String!
    sets: [WorkoutSet!]!
  }
  
  type Query {
    getUser(id: ID!): User
    getWorkout(id: ID!): Workout
  }
  
  type Mutation {
    createUser(username: String!): User
    createWorkout(userId: ID!, date: String!, sets: [WorkoutSetInput!]!): Workout
  }
  
  input SetInput {
    exercise: String!
    repetitions: Int!
    weight: Float
    duration: Int
  }
`;

module.exports = typeDefs;
