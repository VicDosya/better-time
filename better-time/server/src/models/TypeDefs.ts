import { gql } from "apollo-server-express";

const typeDefs = gql`
  #Inputs
  input addSequenceTimerInput {
    title: String
    description: String
    imgUrl: String
  }

  #Types
  type SequenceTimer {
    title: String
    description: String
    imgUrl: String
  }

  #Queries
  type Query {
    getAllSequenceTimers: [SequenceTimer]
  }

  #Mutations
  type Mutation {
    addSequenceTimer(
      title: String!
      description: String!
      imgUrl: String
    ): SequenceTimer
  }
`;

export default typeDefs;
