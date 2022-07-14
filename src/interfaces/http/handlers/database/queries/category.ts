import Category from "interfaces/models/category";
import mongoose from "mongoose";

export const selectAll = async () => {
  return await Category.find().exec();
};

export const select = async (id: String) => {
  return await Category.findById({ _id: id }).exec();
};

export const insert = async (name: String) => {
  const category = new Category({
    _id: new mongoose.Types.ObjectId(),
    name,
  });

  return await category.save();
};

export const update = async (id: String, body: object) => {
  return await Category.findByIdAndUpdate({ _id: id }, body);
};

export const deleted = async (id: String) => {
  return await Category.findByIdAndDelete({ _id: id });
};
