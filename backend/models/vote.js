"use strict";
import { sequelize } from "../db.js";
import { Model, DataTypes } from "sequelize";

class Vote extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Vote.init(
  {
    idNumber: {
      type: DataTypes.INTEGER,
    },
    vote: {
      type: DataTypes.TEXT,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Vote",
  },
);

export default Vote;
