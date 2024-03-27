import express from "express";
import { authenticate, loginVoters } from "../controllers/LoginController.js";

const AuthRouter = express.Router();

AuthRouter.post("/voters", loginVoters).post("/auth", authenticate);

export default AuthRouter;
