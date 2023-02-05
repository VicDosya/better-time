//Import packages
import { ApolloServer, gql } from "apollo-server-express";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

//Import Types and Schemas
import typeDefs from "./models/TypeDefs";
import resolvers from "./models/Resolvers";

//Database connection
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING!) //added "!"  -> will throw an error if the variable is not defined.
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

//GraphQL Server
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
