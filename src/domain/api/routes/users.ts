import express from "express";
import * as User from "../methods/user";

const router = express.Router();

router.get("/all", User.getUsers);

router.get("/:id", User.getUser);

router.post("/", User.createUser);

router.put("/:id", User.editUser);

router.delete("/:id", User.deleteUser);

export default router;
