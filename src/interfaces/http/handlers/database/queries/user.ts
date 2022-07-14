import User from "interfaces/models/user";
import mongoose from "mongoose";

export const selectAll = async () => {
  return await User.find().exec();
};

export const select = async (id: String) => {
  return await User.findById({ _id: id }).exec();
};

export const insert = async (body: any) => {
  let { name, mail, password, typo } = body;

  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name,
    mail,
    password: Buffer.from(password, "utf8").toString("base64"),
    typo,
  });

  return await user.save();
};

export const update = async (id: String, body: object) => {
  return await User.findByIdAndUpdate({ _id: id }, body);
};

export const deleted = async (id: String) => {
  return await User.findByIdAndDelete({ _id: id });
};
