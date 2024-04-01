import express from "express";
import { verify, vote } from "../controllers/VotersController.js";

const VotersRouter = express.Router();

VotersRouter.post("/vote", vote).post("/verify", verify);

export default VotersRouter;
