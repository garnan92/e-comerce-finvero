import { productSchema } from "interfaces/schemas/product";
import mongoose, { model, Document } from "mongoose";

export interface IProduct extends Document {
  mail: String;
  price: String;
  category: mongoose.Types.ObjectId;
  amount: number
}

export default model<IProduct>("Product", productSchema);