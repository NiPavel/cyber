import Voter from "../models/voter.js";
import Auth from "../models/auth.js";
import { sendMail } from "../nodemailer/MailSender.js";

export const loginVoters = async (req, res) => {
  try {
    const voter = await Voter.findOne({
      where: { idNumber: req.body.idNumber },
    });
    if (!voter) {
      return res.status(404).json({
        error: "The id doesn't exist!",
      });
    }
    const code = Math.floor(
      Math.random() * (999999 - 100000 + 1) + 100000,
    ).toString(); // Randomize a code

    console.log(code);

    sendMail(
      "Authentication code",
      `The code is ${code}`,
      voter.dataValues.email,
    );

    await Auth.create({
      code,
      email: voter.dataValues.email,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    res.json({
      status: "ok",
      email: voter.dataValues.email,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Error while logging as Voter!",
    });
  }
};

export const authenticate = async (req, res) => {
  try {
    const auth = await Auth.findOne({
      where: { email: req.body.email, code: +req.body.code },
    });
    if (!auth) {
      res.status(404).json({
        error: "Authentication is not correct!",
      });
    }
    const voter = await Voter.findOne({ where: { email: req.body.email } });
    res.json({
      ...voter.dataValues,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Error via authentication!",
    });
  }
};

export const loginVerifiers = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Error while logging as Verifier!",
    });
  }
};
