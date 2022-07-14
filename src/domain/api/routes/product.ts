import express from "express";
import * as Product from "../methods/product";

const router = express.Router();

router.get("/all", Product.getAllProducts);

router.get("/:id", Product.getProduct);

router.post("/", Product.createProduct);

router.put("/:id", Product.editProduct);

router.delete("/:id", Product.deleteProduct);

export default router;
