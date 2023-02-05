import SequenceTimerSchema from "./SequenceTimerSchema";

const resolvers = {
    Query: {
      getAllSequenceTimers: async () => {
        return SequenceTimerSchema.find();
      },
    },
    Mutation: {
      addSequenceTimer: (parent: any, {title, description, imgUrl}: any) => {
        const sequenceTimer = new SequenceTimerSchema({title, description, imgUrl});
        return sequenceTimer.save();
      },
    },
  };

  export default resolvers;