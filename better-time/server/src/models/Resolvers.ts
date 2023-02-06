import SequenceTimerSchema from "./SequenceTimerSchema";
import SequenceCardSchema from "./SequenceCardSchema";

const resolvers = {
  Query: {
    getAllSequenceTimers: async () => {
      return SequenceTimerSchema.find();
    },
    getAllSequenceCards: async () => {
      return SequenceCardSchema.find();
    },
  },
  Mutation: {
    addSequenceTimer: (parent: any, { title, description, imgUrl }: any) => {
      const sequenceTimer = new SequenceTimerSchema({
        title,
        description,
        imgUrl,
      });
      return sequenceTimer.save();
    },
    addSequenceCard: (
      parent: any,
      { title, description, days, hours, minutes, seconds, imgUrl }: any
    ) => {
      const sequenceCard = new SequenceCardSchema({
        title,
        description,
        days,
        hours,
        minutes,
        seconds,
        imgUrl,
      });
      return sequenceCard.save();
    },
  },
};

export default resolvers;
