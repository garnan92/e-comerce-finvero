import { Request, Response, NextFunction } from "express";
import * as User from "interfaces/http/handlers/database/queries/user";

export const createUser = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const user = await User.insert(req.body);

  return res.status(201).json({
    user,
  });
};

export const editUser = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  await User.update(req.params.id, req.body);

  const user = await User.select(req.params.id);

  return res.status(200).json({
    user,
  });
};

export const getUsers = async (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const users = await User.selectAll();

  return res.status(200).json({
    users,
  });
};

export const getUser = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const user = await User.select(req.params.id);

  return res.status(200).json({
    user,
  });
};

export const deleteUser = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const user = await User.deleted(req.params.id);

  return res.status(200).json({
    user,
  });
};
