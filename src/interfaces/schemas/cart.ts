import mongoose, { Schema } from "mongoose";

export const cartSchema = new Schema({
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  products: {
    type: mongoose.Types.Array,
  },
});
