import Voter from "../models/voter.js";
import Auth from "../models/auth.js";
import { sendMail } from "../nodemailer/MailSender.js";
import { encrypt, decrypt } from "../utils/crypto.js";

export const loginVoters = async (req, res) => {
  try {
    const idNumber = req.body.idNumber;
    let voter;

    if (req.body.verifierEnterence) {
      voter = await Voter.findOne({
        where: { idNumber, role: "verifier" },
      });

      if (!voter) {
        return res.status(404).json({
          error: "Error while logging as a Verifier!",
        });
      }
    } else {
      voter = await Voter.findOne({
        where: { idNumber: req.body.idNumber },
      });
      if (!voter) {
        return res.status(404).json({
          error: "Error while logging as a Voter!",
        });
      }
    }
    const code = Math.floor(
      Math.random() * (999999 - 100000 + 1) + 100000,
    ).toString(); // Randomize a code

    sendMail(
      "Authentication code",
      `The code is ${code}`,
      voter.dataValues.email,
    );

    const cryptedCode = encrypt(code);

    await Auth.upsert({
      email: voter.dataValues.email,
      code: cryptedCode.toString("base64"),
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
      error: "Error while logging!",
    });
  }
};

export const authenticate = async (req, res) => {
  try {
    const auth = await Auth.findOne({
      where: { email: req.body.email },
    });

    if (!auth) {
      return res.status(404).json({
        error: "No voter like this!",
      });
    }

    const code = auth.dataValues.code;
    const decryptedCode = decrypt(Buffer.from(code, "base64"));

    if (req.body.code !== decryptedCode.toString()) {
      return res.status(404).json({
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
