"use strict";
import { sequelize } from "../db.js";
import { Model, DataTypes } from "sequelize";

class Auth extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Auth.init(
  {
    code: DataTypes.TEXT,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "Auth",
  },
);

export default Auth;
