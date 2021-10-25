const express = require("express");
const cors = require("cors");
require("dotenv").config();

const router = require("./routes/index");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

const SERVER_PORT = process.env.SERVER_PORT || 5000;

app.listen(
  SERVER_PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode at port ${SERVER_PORT}.`
  )
);

module.exports = app;
