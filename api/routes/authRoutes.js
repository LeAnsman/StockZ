import express from "express";
import {
  createUser,
  getProfile,
  loginUser,
  logoutUser,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.post("/profile", getProfile);

export default router;
