import express from "express";
import { login, register, verifyEmail } from "../controllers/AuthController";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/verifyEmail", verifyEmail);

export const authRoutes = router;
