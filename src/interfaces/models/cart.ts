import { cartSchema } from "interfaces/schemas/cart";
import mongoose, { model, Document } from "mongoose";

export interface ICart extends Document {
  user: mongoose.Types.ObjectId;
  products: mongoose.Types.Array<mongoose.Types.ObjectId>;
}

export default model<ICart>("Cart", cartSchema);
