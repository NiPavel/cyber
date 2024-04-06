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
        if (votes1[i].dataValues.idNumber === votes2[j].dataValues.idNumber) {
          counter++;
          if (counter > 1) {
            flag = true;
          }
        }
      }
    }

    if (flag) {
      return res.status(400).json({
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

export const randomVote = async (req, res) => {
  try {
    const voters = await Voter.findAll();

    if (voters.length === 0) {
      return res.status(404).json({
        error: "No voters yet!",
      });
    }

    for (const voter of voters) {
      if (!voter.dataValues.voted) {
        await Vote.create({
          email: voter.dataValues.email,
          idNumber: voter.dataValues.idNumber,
          vote: encrypt(Math.floor(Math.random() * 2).toString()).toString(
            "base64",
          ),
          createdAt: new Date(),
          updatedAt: new Date(),
        });

        await Voter.upsert({
          idNumber: voter.dataValues.idNumber,
          voted: true,
        });
      }
    }

    res.json({
      message: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Error while random voting!",
    });
  }
};
