import { Request, Response, NextFunction } from "express";
import * as Cart from "interfaces/http/handlers/database/queries/cart";

export const getAllCarts = async (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const categories = await Cart.selectAll();

  return res.status(200).json({
    categories,
  });
};

export const getCart = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const category = await Category.select(req.params.id);

  return res.status(200).json({
    category,
  });
};

export const createCategory = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const category = await Category.insert(req.body.name);

  return res.status(201).json({
    category,
  });
};

export const editCategory = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  await Category.update(req.params.id, req.body);

  const category = await Category.select(req.params.id);

  return res.status(200).json({
    category,
  });
};

export const deleteCategory = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const category = await Category.deleted(req.params.id);

  return res.status(200).json({
    category,
  });
};
