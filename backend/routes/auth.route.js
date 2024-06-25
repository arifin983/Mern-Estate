import express from "express";
import {
  google,
  signOut,
  signUp,
  singIn,
} from "../controllers/auth.controller.js";
const router = express.Router();
router.post("/signUp", signUp);
router.post("/signIn", singIn);
router.post("/google", google);
router.get("/signOut", signOut);
export default router;
