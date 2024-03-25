"use strict";
import { sequelize } from "../db.js";
import { Model, DataTypes } from "sequelize";

class Center extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Center.init(
  {
    placeName: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Center",
  },
);

export default Center;
