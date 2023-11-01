import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser($userId: ID!) {
    getUser(userId: $userId) {
      _id
      username
    }
  }
`;

export const GET_SETS =gql`
query GetSets {
  sets{
    _id
    exercise
    oneRepMax
    date
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

export const GET_USER_WORKOUTS = gql`
  query GetUserWorkouts($userId: ID!) {
    getUserWorkouts(userId: $userId) {
      _id
      date
      exercises {
        _id
        exercise
        sets {
          _id
          oneRepMax
          date
        }
      }
    }
  }
`;


export const GET_WO_EXERCISES = gql`
  query GetWoExercises {
    workouts{
      _id
      name
      exercises {
        _id
        exercise
        sets {
          _id
          oneRepMax
          date
        }
      }
    }
  }
`;

export const GET_SETS_BY_EXERCISE_NAME = gql`
  query GetSetsByExerciseName($exerciseName: String!) {
    getSetsByExerciseName(exerciseName: $exerciseName) {
      _id
      exercise
      oneRepMax
      date
    }
  }
`;
