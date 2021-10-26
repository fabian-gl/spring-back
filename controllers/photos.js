const fetch = require("node-fetch");

let cachedPhotos;

exports.getAll = async (req, res) => {
  try {
    if (!cachedPhotos) cachedPhotos = await fetchPhotos();

    res.status(200).json(cachedPhotos);
  } catch (error) {
    res.status(500).json({ ok: false, message: "Couldn't fetch data" });
  }
};

function fetchPhotos() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
}
