import { Request, Response, NextFunction } from "express";
import * as Product from "interfaces/http/handlers/database/queries/product";

export const getAllProducts = async (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const products = await Product.selectAll();

  return res.status(200).json({
    products,
  });
};

export const getProduct = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const product = await Product.select(req.params.id);

  return res.status(200).json({
    product,
  });
};

export const createProduct = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const product = await Product.insert(req.body);

  return res.status(201).json({
    product,
  });
};

export const editProduct = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  await Product.update(req.params.id, req.body);

  const product = await Product.select(req.params.id);

  return res.status(200).json({
    product,
  });
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const product = await Product.deleted(req.params.id);

  return res.status(200).json({
    product,
  });
};
