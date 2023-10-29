import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation CreateUser($username: String!, $password: String!) {
  createUser(username: $username, password: $password) {
    user {
      _id
      username
    }
    token
  }
}
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($userId: ID!, $username: String) {
    updateUser(userId: $userId, input: { username: $username }) {
      _id
      username
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_EXERCISE = gql`
  mutation CreateExercise($exercise: String!, $sets: SetInput) {
    createExercise(exercise: $exercise, sets: $sets) {
      _id
      exercise
      sets {
        _id
        reps
        weight
        distance
      }
    }
  }
`;

export const UPDATE_EXERCISE = gql`
  mutation UpdateExercise($exerciseId: ID!, $name: String!, $sets: [SetInput]!) {
    updateExercise(exerciseId: $exerciseId, name: $name, sets: $sets) {
      _id
      name
      sets {
        _id
        reps
        weight
        distance
      }
    }
  }
`;

export const ADD_WORKOUT_DATA = gql`
  mutation AddWorkoutData($exerciseId: ID!, $userId: ID!, $sets: [SetInput]!) {
    addWorkoutData(exerciseId: $exerciseId, userId: $userId, sets: $sets) {
      _id
      sets {
        _id
        reps
        weight
        distance
      }
    }
  }
`;

export const ADD_NEW_WORKOUT =  gql`
mutation addWorkout($workoutData: WorkoutInput){
  addWorkout(workoutData: $workoutData){
    username
    workouts {
      _id
      name
      exercises{
        exercise
          sets {
            reps
          }
      }
      }
    
  }
}
`
