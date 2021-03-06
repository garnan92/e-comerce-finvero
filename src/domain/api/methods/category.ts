import { Request, Response, NextFunction } from "express";
import * as Category from "interfaces/http/handlers/database/queries/category";

export const getAllCategories = async (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const categories = await Category.selectAll();

  return res.status(200).json({
    categories,
  });
};

export const getCategory = async (
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
