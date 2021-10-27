const fetch = require("node-fetch");

exports.getAll = (req, res) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((json) => res.status(200).json(json))
    .catch((err) => {
      res.status(500).json({ message: "Couldn't fetch data" });
    });
};
