"use strict";

const { DataTypes } = require("sequelize");

exports.initUserModel = async (sequelize) => {
  const User = sequelize.define("User", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password_hash: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  });

  await User.sync();
};
