import { Request, Response, NextFunction } from "express";
import * as Category from "interfaces/http/handlers/database/queries/category";

export const createCategory = (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  const category = Category.insert(req.body.name);

  return res.status(201).json({
    category,
  });
};
