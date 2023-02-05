import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
    title: String,
    body: String,
});

export default mongoose.model("test", testSchema);