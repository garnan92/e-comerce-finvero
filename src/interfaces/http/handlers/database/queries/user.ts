import { Request, Response, NextFunction } from "express";
import User from "interfaces/models/user";
import mongoose from "mongoose";

export const createUser = (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  let { name, mail, password, typo } = req.body;

  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name,
    mail,
    password: Buffer.from(password, "utf8").toString("base64"),
    typo,
  });

  return user
    .save()
    .then((result) => {
      return res.status(201).json({
        user: result,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        error,
      });
    });
};

export const editUser = (req: Request, res: Response, _next: NextFunction) => {
  let { id } = req.params;

  User.findByIdAndUpdate({ _id: id }, req.body)
    .then((_result) => {
      return res.status(200).json({
        message: "updated",
      });
    })
    .catch((error) => {
      return res.status(500).json({
        error,
      });
    });
};
