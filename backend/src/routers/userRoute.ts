import express from "express";
import { registerUser, loginUser } from "../controllers/userController";

const router = express.Router();

router.route("/user/register").post(registerUser);
router.route("/user/login").post(loginUser);

export default router;
