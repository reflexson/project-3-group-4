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
  _id: OID!
  name:String!
  exercises: [Exercise!]!
}

input WorkoutInput {
  _id: ID
  name: String,
  exercises:[ExerciseInput]
}

input ExerciseInput {
  _id: ID
  exercise: String
  sets: [SetInput]
}

type Exercise {
  _id: OID!
  exercise: String!
  sets: [Set!]!
}

type Set {
  onerepmax: Float
  Date: String
  reps: Int
}

input SetInput {
  _id: ID
  reps: Int
  weight: Float
  distance: Float
}

type Auth {
  token: ID
  user: User
}


type OID {
  oid: String
}

type Query {
  user(id: ID!): User
  workout(id: ID!): Workout
  workouts:[Workout]
  workoutExercises:[Exercise]
  getUserWorkoutByID(userID: ID!, workoutID: ID!): Workout
  exerciseByName(name: String!): [Exercise]
  exerciseData(exerciseName: String!): [Set!]!
  getExerciseDataByUsernameAndExercise(username: String!, exercise: String!): [Set!]!
}

type Mutation {
  createExercise(exercise:String!, set:SetInput): Workout
  createUser(firstName: String, lastName: String, username: String!, password: String!): Auth
  addSet(reps: Int!, weight: Float, distance: Float): Set
  updateSet(id: ID!, reps: Int, weight: Float, distance: Float): Set
  deleteSet(id: ID!): Set
  loginUser(username: String!, password: String!): Auth
  addWorkout(workoutData: WorkoutInput):User
}
`;

module.exports = typeDefs;

