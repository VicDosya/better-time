//Import packages
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

//Import Errors
import { AuthenticationError } from "apollo-server-express";

export const checkAuth = (context: any) => {
  const authHeader = context.req.headers.authorization;
  if (authHeader) {
    //Bearer ...
    const token = authHeader.split("Bearer ")[1];
    if (token) {
      try {
        const user = jwt.verify(token, process.env.SECRET_KEY as string);
        return user;
      } catch (err) {
        throw new AuthenticationError("Invalid/Expired token.");
      }
    }
    //Incase of a wrong format.
    throw new Error("Authentication token must be 'Bearer [token]");
  }
  //Incase if authHeader not provided
  throw new Error("Authorization header token must be provided");
};
