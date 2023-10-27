import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser($userId: ID!) {
    getUser(userId: $userId) {
      _id
      username
    }
  }
`;

export const GET_WORKOUT_HISTORY = gql`
  query GetWorkoutHistory($userId: ID!) {
    getWorkouts(userId: $userId) {
      _id
      date
      exercises {
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
  }
`;
