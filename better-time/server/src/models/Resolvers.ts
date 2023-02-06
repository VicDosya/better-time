//Import schemas
import SequenceTimerSchema from "./SequenceTimerSchema";
import SequenceCardSchema from "./SequenceCardSchema";

const resolvers = {
  //Queries
  Query: {
    getAllSequenceTimers: async () => {
      return SequenceTimerSchema.find();
    },
    getAllSequenceCards: async () => {
      return SequenceCardSchema.find();
    },
  },
  //Mutations
  Mutation: {
    //Adding a new sequence timer
    addSequenceTimer: (parent: any, { title, description, imgUrl }: any) => {
      const sequenceTimer = new SequenceTimerSchema({
        title,
        description,
        imgUrl,
      });
      return sequenceTimer.save();
    },
    //Adding a new time card in the sequence timer page
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
