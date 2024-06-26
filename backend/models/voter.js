"use strict";
import { sequelize } from "../db.js";
import { Model, DataTypes } from "sequelize";

class Voter extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Voter.init(
  {
    idNumber: { type: DataTypes.INTEGER, unique: true },
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    voted: DataTypes.BOOLEAN,
    role: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Voter",
  },
);

export default Voter;
