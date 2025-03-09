import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";


const router = express.Router();
// all routes are /api/auth/.....

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);

export default router;