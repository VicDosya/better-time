import { gql } from "apollo-server-express";

const typeDefs = gql`
  #Inputs
  input RegisterInput{
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  #Types
  type User{
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }

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
    register(registerInput: RegisterInput): User!

    login(username: String!, password: String!): User!

    addSequenceTimer(
      title: String!
      description: String!
      imgUrl: String
      createdAt: String,
    ): SequenceTimer

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
