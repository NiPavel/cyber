import express from "express";
import { getAllVotes, verify, vote } from "../controllers/VotersController.js";

const VotersRouter = express.Router();

VotersRouter.post("/vote", vote)
  .post("/verify", verify)
  .get("/votes", getAllVotes);

export default VotersRouter;
