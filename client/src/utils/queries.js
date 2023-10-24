import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser($userId: ID!) {
    getUser(userId: $userId) {
      id
      username
    }
  }
`;

export const GET_WORKOUT_HISTORY = gql`
  query GetWorkoutHistory($userId: ID!) {
    getWorkouts(userId: $userId) {
      id
      exercise
      sets
      reps
      duration
      date
    }
  }
`;

