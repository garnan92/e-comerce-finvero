import express from "express";
import * as Category from "../methods/category";

const router = express.Router();

router.post("/", Category.createCategory);

export default router;
