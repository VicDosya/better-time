import { gql } from "apollo-server-express";

const typeDefs = gql`
  #Inputs

  #Types
  type SequenceTimer {
    id: ID
    title: String
    description: String
    imgUrl: String
    timers: [SequenceCard]
  }
  type SequenceCard {
    id: ID
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
    sequenceTimers: [SequenceTimer]
    sequenceTimer(sequenceTimerId: ID!): SequenceTimer
    sequenceCards(sequenceTimerId: ID!): [SequenceCard]
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
      sequenceTimerId: ID!
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
