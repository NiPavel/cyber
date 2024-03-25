import express from "express";

const VotersRouter = express.Router();

VotersRouter.get("/", (req, res) => {
  res.send("Voters");
});

export default VotersRouter;
