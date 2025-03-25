import express from "express";
import { registerUser, loginUser } from "../controllers/userController";

const router = express.Router();

router.post("/signup", registerUser);
router.post("/signin", loginUser);

export default router;
