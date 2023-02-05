import { gql } from "@apollo/client";

//query to get all sequence timers
export const GET_ALL_SEQUENCE_TIMERS = gql`
  query Query {
    getAllSequenceTimers {
      description
      imgUrl
      title
    }
  }
`;
