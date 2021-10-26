const { getDBModel } = require("../config/db");

exports.login = async (req, res) => {
  const User = getDBModel("User");

  const savedUser = await User.create({
    firstName: "pedro",
    lastName: "Elesc",
    email: "rewertw",
    password_hash: "passwordHash",
  });
  res.status(200).json({ ok: true, data: "login", savedUser });
};

exports.register = async (req, res) => {
  res.status(200).json({ ok: true, data: "register" });
};
