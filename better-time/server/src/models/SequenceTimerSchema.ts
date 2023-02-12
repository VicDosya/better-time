import mongoose, { Schema } from "mongoose";

const SequenceTimer = new mongoose.Schema({
  user: {type: Schema.Types.ObjectId, ref: 'user'},
  username: String,
  title: String,
  description: String,
  imgUrl: String,
  timers: Number,
  totalTime: String,
  likes: Number,
  favorites: Number,
  createdAt: String,
});

export default mongoose.model("sequencetimer", SequenceTimer);
