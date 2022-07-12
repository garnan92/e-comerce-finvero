import { userSchema } from "interfaces/schemas/user";
import { model, Document } from "mongoose";

export interface IUser extends Document {
  mail: String;
  name: String;
  password: String;
  typo: number;
}

export default model<IUser>("User", userSchema);
