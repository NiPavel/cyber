import express from "express";
import Center from "../models/center.js";

const CentersRouter = express.Router();

CentersRouter.get("/", async (req, res) => {
  try {
    const centers = await Center.findAll();
    res.json(centers);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "Error",
    });
  }
});
export default CentersRouter;
