import { Router } from "express";
import {
  getUserByIdHandler,
  toLoginHandler,
  toRegisterHandler,
} from "../handlers/userHandler";

const router = Router();

router.get("/:id", getUserByIdHandler);

router.post("/login", toLoginHandler);

router.post("/register", toRegisterHandler);

export default router;
