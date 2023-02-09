import mongoose, { Schema } from "mongoose";

const SequenceCard = new mongoose.Schema({
  sequenceTimerId: {type: Schema.Types.ObjectId, ref:"sequencetimer"},
  title: String,
  description: String,
  days: String,
  hours: String,
  minutes: String,
  seconds: String,
  imgUrl: String,
});

export default mongoose.model("sequencecard", SequenceCard);
