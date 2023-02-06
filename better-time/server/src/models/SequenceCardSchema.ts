import mongoose from "mongoose";

const SequenceCard = new mongoose.Schema({
  title: String,
  description: String,
  days: String,
  hours: String,
  minutes: String,
  seconds: String,
  imgUrl: String,
});

export default mongoose.model("sequencecard", SequenceCard);
