import Cart from "interfaces/models/cart";
import mongoose from "mongoose";

export const selectAll = async () => {
  return await Cart.find().exec();
};

export const selectByUser = async (id: String) => {
  return await Cart.find({ user: { _id: id } }).exec();
};

export const insert = async (body: any) => {
  let { user, products } = body;

  products.map((item: string) => {
    return new mongoose.Types.ObjectId(item);
  });

  const category = new Cart({
    _id: new mongoose.Types.ObjectId(),
    user: new mongoose.Types.ObjectId(user),
    products,
  });

  return await category.save();
};

export const update = async (id: String, body: object) => {
  return await Cart.findByIdAndUpdate({ _id: id }, body);
};

export const deleted = async (id: String) => {
  return await Cart.findByIdAndDelete({ _id: id });
};
