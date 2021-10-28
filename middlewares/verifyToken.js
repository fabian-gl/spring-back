const jwt = require("jsonwebtoken");

const { JWT_SECRET_KEY } = process.env;

exports.verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET_KEY);

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      errors: ["You need to be authenticated to access this route"],
    });
  }
};
