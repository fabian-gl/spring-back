const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { getDBModel } = require("../config/db");

exports.login = async (req, res) => {
  try {
    const User = getDBModel("User");

    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user)
      res.status(401).json({ errors: ["Incorrect email or password"] });
    else {
      const authOk = await bcrypt.compare(
        req.body.password,
        user.password_hash
      );

      if (authOk) {
        jwt.sign(
          {
            userId: user.id,
          },
          process.env.JWT_SECRET_KEY,
          { expiresIn: "24h" },
          (err, token) => {
            if (err) throw new Error(err);
            res.status(200).json({
              token,
              firstName: user.firstName,
              message: "Login successful",
            });
          }
        );
      } else res.status(401).json({ errors: ["Incorrect email or password"] });
    }
  } catch (error) {
    res.status(500).json({ errors: ["Couldn't log you in"] });
  }
};

exports.register = async (req, res) => {
  try {
    const User = getDBModel("User");
    const user = await User.findOne({ where: { email: req.body.email } });

    if (user)
      res.status(400).json({ errors: ["The email is already registered"] });
    else {
      const hash = await hashPassword(req.body.password);

      await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password_hash: hash,
      });

      res.status(200).json({ message: "User created, now log in please" });
    }
  } catch (error) {
    res.status(500).json({ errors: "Couldn't sign you in" });
  }
};

// Helper function
async function hashPassword(password) {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) reject(err);
      bcrypt.hash(password, salt, function (err, hash) {
        if (err) reject(err);
        resolve(hash);
      });
    });
  });
}
