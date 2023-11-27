const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database/database");

const UserModel = sequelize.define("user_model", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM("client", "employee"),
    allowNull: false,
    defaultValue: "client"
  },
  status: {
    type: DataTypes.ENUM("active", "disable"),
    allowNull: false,
    defaultValue: "active",
  },
});

module.exports = UserModel;
