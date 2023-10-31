import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser($userId: ID!) {
    getUser(userId: $userId) {
      _id
      username
    }
  }
`;

export const GET_WORKOUTS = gql`
  query GetWorkouts {
    workouts{
      _id
      name
      exercises {
        _id
        exercise
        
      }
    }
  }
`;



