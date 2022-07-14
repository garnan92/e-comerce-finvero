import Product from "interfaces/models/products";
import mongoose from "mongoose";

export const selectAll = async () => {
  return await Product.find().exec();
};

export const select = async (id: String) => {
  return await Product.findById({ _id: id }).exec();
};

export const insert = async (body: any) => {
  const { name, price, category, amount } = body;

  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name,
    price,
    category: new mongoose.Types.ObjectId(category),
    amount,
  });

  return await product.save();
};

export const update = async (id: String, body: object) => {
  return await Product.findByIdAndUpdate({ _id: id }, body);
};

export const deleted = async (id: String) => {
  return await Product.findByIdAndDelete({ _id: id });
};
