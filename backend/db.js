import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("cyber", "postgres", "1992", {
  dialect: "postgres",
  host: "localhost",
  port: 5432,
});
