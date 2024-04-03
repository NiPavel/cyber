import Vote from "../models/vote.js";
import { decrypt, encrypt } from "../utils/crypto.js";
import Voter from "../models/voter.js";

export const vote = async (req, res) => {
  try {
    const voteOfVoter = req.body.vote;
    let encryptedVote;
    if (voteOfVoter === "Democrates") {
      encryptedVote = encrypt("1");
    } else {
      encryptedVote = encrypt("0");
    }

    const email = req.body.email;
    const idNumber = req.body.idNumber;
    const vote = await Vote.findOne({
      where: { idNumber },
    });

    if (vote) {
      return res.status(400).json({
        error: `You have voted already!`,
      });
    }

    await Vote.create({
      idNumber,
      email,
      vote: encryptedVote.toString("base64"),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await Voter.upsert({
      idNumber,
      voted: true,
    });

    res.json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Error while voting!",
    });
  }
};

export const verify = async (req, res) => {
  try {
    let flag = false;

    const votes = await Vote.findAll();
    if (!votes) {
      return res.json({
        error: "No votes yet!",
      });
    }

    const votes1 = [...votes];
    const votes2 = [...votes];

    for (let i = 0; i < votes.length; i++) {
      let counter = 0;
      for (let j = 0; j < votes.length; j++) {
        if (votes1[i].dataValues.idNumber === votes2[j].dataValues.id) {
          counter++;
          if (counter > 1) {
            flag = true;
            return;
          }
        }
      }
    }

    if (flag) {
      return res.json({
        message:
          "The verification has fault, there one or more voter with 2 votes!",
      });
    }
    res.json({
      message: "The verification has passed successfully!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Error while verifying!",
    });
  }
};

export const getAllVotes = async (req, res) => {
  try {
    const votes = await Vote.findAll();

    if (votes.length === 0) {
      return res.status(400).json({
        message: "No votes yet!",
      });
    }

    const parsedVotes = {
      democrates: 0,
      republicans: 0,
    };

    votes.forEach((vote) => {
      const decryptedVote = decrypt(
        Buffer.from(vote.dataValues.vote, "base64"),
      ).toString();
      if (decryptedVote === "1") {
        parsedVotes.democrates++;
      } else {
        parsedVotes.republicans++;
      }
    });

    res.json(parsedVotes);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Error while getting all votes.",
    });
  }
};
