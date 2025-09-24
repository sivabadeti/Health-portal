import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
  district: { type: String, required: true },
  number: { type: Number, required: true },
  disease: { type: String, required: true },
  gender: { type: String, required: true },
  date: { type: Date, default: Date.now },
  time: {
    type: String,
    default: () => {
      const now = new Date();
      return now.toTimeString().split(" ")[0];
    },
  },
});

export default mongoose.model("Patient", schema);
