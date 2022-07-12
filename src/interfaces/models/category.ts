import { categorySchema } from "interfaces/schemas/category";
import { model, Document } from "mongoose";

export interface ICategory extends Document {
  name: String;
}

export default model<ICategory>("Category", categorySchema);
