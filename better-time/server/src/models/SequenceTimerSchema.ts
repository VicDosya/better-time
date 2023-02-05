import mongoose from "mongoose";

const SequenceTimer = new mongoose.Schema({
    title: String,
    description: String,
    imgUrl: String,
    timers: Number,
    totalTime: String,
    likes: Number,
    favorites: Number,
});

export default mongoose.model("sequencetimer", SequenceTimer);