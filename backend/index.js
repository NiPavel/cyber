import express from "express";
import { sequelize } from "./db.js";
import Center from "./models/center.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/centers", async (req, res) => {
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

app.post("/login", (req, res) => {
  res.send("login");
});

app.post("/register", (req, res) => {
  res.send("register");
});

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
