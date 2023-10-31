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


export const ADD_WORKOUT_DATA = gql`
  mutation AddWorkoutData($exerciseId: ID!, $userId: ID!) {
    addWorkoutData(exerciseId: $exerciseId, userId: $userId) {
      _id
      
    }
  }
`;

export const ADD_SET_DATA = gql`
  mutation AddSetData($setId: ID!, $userId: ID! {
    addSetData(setId: $setId, userId: $userId) {
      _id
      sets {
        _id
          exercise
          oneRepMax
          date
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
      }
      }
    
  }
}
`;

export const ADD_SET = gql`
  mutation addSet($setData: SetInput) {
    addSet(setData: $setData) {
      sets {
        _id
        exercise
        oneRepMax
        date
      }
    }
  }
`;