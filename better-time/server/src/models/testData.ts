import mongoose from "mongoose";

const testData = new mongoose.Schema({
    first: String,
    second: String,
});

export default mongoose.model('testdata', testData);