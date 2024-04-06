import express from "express";
import {
  getAllVotes,
  randomVote,
  verify,
  vote,
} from "../controllers/VotersController.js";

const VotersRouter = express.Router();

VotersRouter.post("/vote", vote)
  .post("/verify", verify)
  .post("/random", randomVote)
  .get("/votes", getAllVotes);

export default VotersRouter;
