import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateUser($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      id
      username
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

export const ADD_WORKOUT = gql`
  mutation AddWorkout(
    $userId: ID!,
    $exercise: String!,
    $sets: Int!,
    $reps: Int!,
    $duration: Int!
  ) {
    createWorkout(
      userId: $userId,
      input: {
        exercise: $exercise,
        sets: $sets,
        reps: $reps,
        duration: $duration
      }
    ) {
      id
      exercise
      sets
      reps
      duration
      date
    }
  }
`;
