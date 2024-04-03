import Center from "../models/center.js";

export const getAllCenters = async (req, res) => {
  try {
    const centers = await Center.findAll();

    if (centers.length === 0) {
      res.status(404).json({
        error: "No centers found",
      });
    }

    res.json(centers);
  } catch (err) {
    console.log(err);
  }
};
