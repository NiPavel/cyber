import express from "express";
import { getAllCenters } from "../controllers/CentersController.js";

const CentersRouter = express.Router();

CentersRouter.get("/", getAllCenters);
export default CentersRouter;
