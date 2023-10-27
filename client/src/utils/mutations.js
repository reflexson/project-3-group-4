import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($username: String!, $password: String!, $firstName: String, $lastName: String) {
    createUser(username: $username, password: $password, firstName: $firstName, lastName: $lastName) {
      token
      user {
        id
        username
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($userId: ID!, $username: String) {
    updateUser(userId: $userId, input: { username: $username }) {
      id
      username
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      token
      user {
        id
        username
      }
    }
  }
`;

export const CREATE_EXERCISE = gql`
  mutation CreateExercise($userId: ID!, $name: String!, $sets: [SetInput]!) {
    createExercise(userId: $userId, name: $name, sets: $sets) {
      id
      name
      sets {
        id
        reps
        distance
      }
    }
  }
`;

export const UPDATE_EXERCISE = gql`
  mutation UpdateExercise($exerciseId: ID!, $name: String!, $sets: [SetInput]!) {
    updateExercise(exerciseId: $exerciseId, name: $name, sets: $sets) {
      id
      name
      sets {
        id
        reps
        distance
      }
    }
  }
`;

export const ADD_WORKOUT_DATA = gql`
  mutation AddWorkoutData($exerciseId: ID!, $userId: ID!, $sets: [SetInput]!) {
    addWorkoutData(exerciseId: $exerciseId, userId: $userId, sets: $sets) {
      id
      sets {
        id
        reps
        distance
      }
    }
  }
`;
