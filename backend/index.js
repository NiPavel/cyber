import express from "express";
import cors from "cors";
import { sequelize } from "./db.js";
import VotersRouter from "./routes/voters.js";
import CentersRouter from "./routes/centers.js";
import AuthRouter from "./routes/auth.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/voters", VotersRouter);
app.use("/centers", CentersRouter);
app.use("/login", AuthRouter);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
