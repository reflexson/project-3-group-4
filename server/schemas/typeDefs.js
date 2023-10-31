const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID
  firstName: String!
  lastName: String!
  username: String!
  workouts: [Workout]
  sets:[Set]

}

type Workout {
  _id: ID
  name:String
  exercises: [Exercise]
}



input ExerciseInput {
  _id: ID
  exercise: String

}

type Exercise {
  _id: ID
  exercise: String

}

type Set {
  _id: ID
  exercise: String
  oneRepMax: Float
  date: String
}

input SetInput {
  _id: ID
  exercise: String
  oneRepMax: Float
  date: String
}

input WorkoutInput {
  _id: ID
  name: String,
  exercises:[ExerciseInput]
}

type Auth {
  token: ID
  user: User
}

type Query {
  user(id: ID!): User
  workout(id: ID!): Workout
  workouts:[Workout]
  workoutExercises:[Exercise]
}


type Mutation {

  createUser(firstName: String, lastName: String, username: String!, password: String!): Auth
  addSet(setData: SetInput):User
  loginUser(username: String!, password: String!): Auth
  addWorkout(workoutData: WorkoutInput):User

}
`;

module.exports = typeDefs;

