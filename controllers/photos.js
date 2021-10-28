const fetch = require("node-fetch");

let cachedPhotos;

exports.getAll = async (req, res) => {
  const offset = +req.query.offset || 0;
  const limit = +req.query.limit || 10;
  try {
    if (!cachedPhotos) cachedPhotos = await fetchPhotos();

    res
      .status(200)
      .json({
        count: cachedPhotos.length,
        photos: cachedPhotos.slice(offset, offset + limit),
      });
  } catch (error) {
    res.status(500).json({ message: "Couldn't fetch data" });
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
