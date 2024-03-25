import Voter from "../models/voter.js";

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

    res.json({
      ...voter.dataValues,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Error while logging!",
    });
  }
};
