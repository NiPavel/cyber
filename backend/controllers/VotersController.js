import Vote from "../models/vote.js";

export const vote = async (req, res) => {
  try {
    const voteOfVoter = req.body.vote;
    const email = req.body.email;
    const idNumber = req.body.idNumber;
    const vote = await Vote.findOne({
      where: { idNumber },
    });

    if (vote) {
      return res.json({
        error: `The voter with id ${idNumber} has voted already!`,
      });
    }

    await Vote.create({
      idNumber,
      email,
      vote: voteOfVoter,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    res.json({
      status: "success",
    });
  } catch (err) {
    console.log(err);
    res.send(500).json({
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
          "The verification ha fault, there one or more voter with 2 votes!",
      });
    }
    res.json({
      message: "The verification has passed successfully!",
    });
  } catch (err) {
    console.log(err);
    res.send(500).json({
      error: "Error while verifying!",
    });
  }
};
