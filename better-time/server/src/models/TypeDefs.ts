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
  type SequenceCard {
    title: String
    description: String
    days: String
    hours: String
    minutes: String
    seconds: String
    imgUrl: String
  }

  #Queries
  type Query {
    getAllSequenceTimers: [SequenceTimer]
  }
  type Query {
    getAllSequenceCards: [SequenceCard]
  }

  #Mutations
  type Mutation {
    addSequenceTimer(
      title: String!
      description: String!
      imgUrl: String
    ): SequenceTimer
  }

  type Mutation {
    addSequenceCard(
      title: String
      description: String
      days: String
      hours: String
      minutes: String
      seconds: String
      imgUrl: String
    ): SequenceCard
  }
`;

export default typeDefs;
