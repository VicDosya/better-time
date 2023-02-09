//Import schemas
import SequenceTimerSchema from "../../models/SequenceTimerSchema";
import SequenceCardSchema from "../../models/SequenceCardSchema";

const SequenceTimerResolvers = {
  SequenceTimer: {
    timers: async (parent: any) => {
      return SequenceCardSchema.find({ sequenceTimerId: parent.id });
    },
  },

  //Queries
  Query: {
    sequenceTimers: async () => {
      const sequenceTimers = await SequenceTimerSchema.find();
      console.log("Finding all Sequence timers in database.");
      return sequenceTimers;
    },
    sequenceTimer: async (parent: any, { sequenceTimerId }: any) => {
      const sequenceTimer = await SequenceTimerSchema.findById(sequenceTimerId);
      if (sequenceTimer) {
        return sequenceTimer;
      } else {
        throw new Error("Timer not found");
      }
    },
  },

  //Mutations
  Mutation: {
    //Adding a new sequence timer
    addSequenceTimer: async (
      parent: any,
      { title, description, imgUrl }: any
    ) => {
      const sequenceTimer = new SequenceTimerSchema({
        title,
        description,
        imgUrl,
      });
      const timer = await sequenceTimer.save();
      return timer;
    },
    //Adding a new time card in the sequence timer page
    addSequenceCard: (
      parent: any,
      {
        sequenceTimerId,
        title,
        description,
        days,
        hours,
        minutes,
        seconds,
        imgUrl,
      }: any
    ) => {
      const sequenceCard = new SequenceCardSchema({
        sequenceTimerId,
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

export default SequenceTimerResolvers;
