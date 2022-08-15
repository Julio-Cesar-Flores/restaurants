import mongoose from "mongoose";

const schema = new mongoose.Schema({
  address: {
    building: String,
    coord: [Number], //, Number
    street: String,
    zipcode: String,
  },
  borough: String,
  cuisine: String,
  grades: [
    {
      date: Date,
      grade: String,
      score: Number,
    },
  ],
  name: String,
  restaurant_id: String,
});

export default mongoose.model("Restaurant", schema);
