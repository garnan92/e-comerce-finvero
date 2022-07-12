import Category from "interfaces/models/category";
import mongoose from "mongoose";

export const selectAll = () => {
  Category.find()
    .exec()
    .then((results) => {
      return {
        status: true,
        categories: results,
      };
    })
    .catch((error) => {
      return {
        status: false,
        error,
      };
    });
};

export const select = (id: String) => {
  Category.findById({ _id: id })
    .exec()
    .then((result) => {
      return {
        status: true,
        category: result,
      };
    })
    .catch((error) => {
      return {
        status: false,
        error,
      };
    });
};

export const insert = (name: String) => {
  const category = new Category({
    _id: new mongoose.Types.ObjectId(),
    name,
  });

  return category
    .save()
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};

export const update = (id: String, body: object) => {
  Category.findByIdAndUpdate({ _id: id }, body)
    .then(() => {
      return {
        status: true,
      };
    })
    .catch((error) => {
      return {
        status: false,
        error,
      };
    });
};

export const deleted = (id: String) => {
  Category.findByIdAndDelete({ _id: id })
    .then(() => {
      return {
        status: true,
      };
    })
    .catch((error) => {
      return {
        status: false,
        error,
      };
    });
};
