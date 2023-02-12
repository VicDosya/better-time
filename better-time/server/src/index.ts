//Import packages
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

//Import Types and Schemas
import typeDefs from "./graphql/TypeDefs";
import resolvers from "./graphql/resolvers/Resolvers";

//Database connection
mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING!) //added "!"  -> will throw an error if the variable is not defined.
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

//GraphQL Server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  // context: ({ req }) => ({ req }), //Take the req body and forward it to the context so we can access it.
});

const app = express();
app.use(cors());

apolloServer.start().then((res) => {
  apolloServer.applyMiddleware({ app });
  app.listen({ port: 3001 }, () =>
    console.log("🚀 Server is up running - 3001")
  );
});
