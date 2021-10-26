const express = require("express");

const router = express.Router();
const authRoutes = require("./auth");
const photosRoutes = require("./photos");
const postsRoutes = require("./posts");

router.use("/auth", authRoutes);
router.use("/photos", photosRoutes);
router.use("/posts", postsRoutes);

router.get("/", (req, res) => {
  res.status(200).json({ ok: true });
});

module.exports = router;
