import express from "express";
import * as Category from "../methods/category";

const router = express.Router();

router.get("/all", Category.getAllCategories);

router.get("/:id", Category.getCategory);

router.post("/", Category.createCategory);

router.put("/:id", Category.editCategory);

router.delete("/:id", Category.deleteCategory);

export default router;
