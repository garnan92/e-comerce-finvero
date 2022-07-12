import { Schema } from "mongoose";

export const categorySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
});
