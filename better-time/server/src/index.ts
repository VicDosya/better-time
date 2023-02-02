import { ApolloServer, gql } from "apollo-server-express";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();
import testData from './models/testData';


//Database connection
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING!) //added "!"  -> will throw an error if the variable is not defined.
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

//graphql server
//types query/mutation/subscription
const typeDefs = gql`
    type Test {
        first: String
        second: String
    }
    type Query {
      getTestData: [Test]
    }
`;

//Define your data set
const testings = [
  {
    first: "hello",
    second: "Second Test",
  },
];

//Define a resolver
const resolvers = {
  Query: {
    testings: () => testings,
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();
app.use(cors());

apolloServer.start().then((res) => {
  apolloServer.applyMiddleware({ app });
  app.listen({ port: 3001 }, () =>
    console.log("🚀 Server is up running - 3001")
  );
});
