const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { initDb } = require("./config/db");

const router = require("./routes/index");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

const SERVER_PORT = process.env.SERVER_PORT || 5000;

// Init database and then start listening to requests
initDb()
  .then(() => {
    console.log("Connected to mySql!");
    app.listen(
      SERVER_PORT,
      console.log(`Server listening to port ${SERVER_PORT}.`)
    );
  })
  .catch((err) => {
    console.log(`Couldn't connect to database: ${err}`);
  });

module.exports = app;
