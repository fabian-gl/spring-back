const express = require("express");
const authController = require("../controllers/auth");
const validationSchema = require("../validation-schemas/auth");
const { validate } = require("../middlewares/validate");

const router = express.Router();

router.post("/login", validate(validationSchema.login), authController.login);
router.post(
  "/register",
  validate(validationSchema.register),
  authController.register
);

module.exports = router;
