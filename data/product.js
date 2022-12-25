import mongoose from "mongoose";
export const dbSchema = new mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  isSold: { type: Boolean },
  stories: { type: Array },
});
