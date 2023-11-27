const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database/database");

const RepairsModel = sequelize.define("repairs_model", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("completed", "pending", "cancelled"),
    allowNull: false,
    defaultValue: "pending",
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = RepairsModel