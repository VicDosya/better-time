//Import resolvers
import SequenceTimerResolvers from "./SequenceTimerResolvers";
import UserResolvers from './UserResolvers';

const resolvers = {
  ...SequenceTimerResolvers,
  ...UserResolvers,
};

export default resolvers;
