import { gql } from "@apollo/client";

//Get all sequence timers query
export const GET_ALL_SEQUENCE_TIMERS = gql`
  query Query {
    sequenceTimers {
      id
      title
      description
      imgUrl
    }
  }
`;
