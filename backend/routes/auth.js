import express from "express";

const AuthRouter = express.Router();

AuthRouter.post("/login", (req, res) => {
  res.send("Login");
});

export default AuthRouter;
