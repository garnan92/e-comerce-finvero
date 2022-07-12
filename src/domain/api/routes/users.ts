import express from "express";
import {
  createUser,
  editUser,
} from "interfaces/http/handlers/database/queries/user";

const router = express.Router();

router.post("/", createUser);
router.put("/:id", editUser);

export default router;
