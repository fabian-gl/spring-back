const express = require("express");
const photosController = require("../controllers/photos");

const router = express.Router();

router.get("/", photosController.getAll);

module.exports = router;
