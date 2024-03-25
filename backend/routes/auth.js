import express from "express";
import { loginVoters } from "../controllers/LoginController.js";

const AuthRouter = express.Router();

AuthRouter.post("/", loginVoters);

export default AuthRouter;
