import { gql } from "@apollo/client";

//Mutation to add a new card
export const ADD_CARD_MUTATION = gql`
  mutation Mutation(
    $title: String
    $description: String
    $days: String
    $hours: String
    $minutes: String
    $seconds: String
    $imgUrl: String
  ) {
    addSequenceCard(
      title: $title
      description: $description
      days: $days
      hours: $hours
      minutes: $minutes
      seconds: $seconds
      imgUrl: $imgUrl
    ) {
      days
      description
      hours
      imgUrl
      minutes
      seconds
      title
    }
  }
`;

//Query to get all sequence cards
export const GET_ALL_SEQUENCE_CARDS = gql`
  query Query {
    getAllSequenceCards {
      title
      description
      days
      hours
      minutes
      seconds
      imgUrl
    }
  }
`;
