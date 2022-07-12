import mongoose, { Schema } from "mongoose";

export const productSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});
