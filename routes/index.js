const express = require("express");

const { verifyToken } = require("../middlewares/verifyToken");

const router = express.Router();
const authRoutes = require("./auth");
const photosRoutes = require("./photos");
const postsRoutes = require("./posts");

router.use("/auth", authRoutes);
router.use("/photos", verifyToken, photosRoutes);
router.use("/posts", verifyToken, postsRoutes);

router.get("/", (req, res) => {
  res.status(200).json({ ok: true });
});

module.exports = router;
