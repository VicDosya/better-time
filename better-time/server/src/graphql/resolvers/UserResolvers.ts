//Import packages
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

//Import components
import {
  validateRegisterInput,
  validateLoginInput,
} from "../../util/validators";

//Apollo Errors
import { UserInputError } from "apollo-server-express";

//Import Schema
import User from "../../models/User";

//Import types
import { UserType } from "./types/UserResolvers.types";

//Generate a token function
const generateToken = (user: UserType) => {
  const createToken = jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
    },
    process.env.SECRET_KEY!,
    { expiresIn: "1h" }
  );
  if (!createToken) {
    throw new Error("Could not generate token.");
  }
  return createToken;
};

const UserResolvers = {
  Mutation: {
    async login(parent: any, { username, password }: any) {
      const { errors, valid } = validateLoginInput(username, password);
      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }
      const user = await User.findOne({ username });

      if (!user) {
        errors.general = "User not found.";
        throw new UserInputError("User not found", { errors });
      }

      if (!user.password) {
        errors.general = "No password set for this user.";
        throw new UserInputError("No password set", { errors });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        errors.general = "Wrong credentials";
        throw new UserInputError("Wrong credentials", { errors });
      }

      //Generate a token for the user
      const token = generateToken(user);

      return {
        ...user.toObject(),
        id: user._id,
        token,
      };
    },

    async register(
      parent: any,
      { registerInput: { username, email, password, confirmPassword } }: any
    ) {
      // Validate user data
      const { valid, errors } = validateRegisterInput(
        username,
        email,
        password,
        confirmPassword
      );
      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }
      // Make sure user doesnt already exists ('errors' payload object will be used to display in the front end.)
      const user = await User.findOne({ username });
      if (user) {
        throw new UserInputError("Username is taken", {
          errors: {
            username: "This username is taken",
          },
        });
      }
      // Hash the password and create an auth token
      password = await bcrypt.hash(password, 12);

      const newUser = new User({
        email,
        username,
        password,
        createdAt: new Date().toISOString(),
      });

      const res = await newUser.save();

      //Generate a token for the user
      const token = generateToken(res);

      return {
        ...res.toObject(),
        id: res._id,
        token,
      };
    },
  },
};

export default UserResolvers;
