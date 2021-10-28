const fetch = require("node-fetch");

let cachedPhotos;
let timestampLastFetch;
const ONE_HOUR = 1000 * 60 * 60;

exports.getAll = async (req, res) => {
  const offset = +req.query.offset || 0;
  const limit = +req.query.limit || 10;
  const now = Date.now();

  try {
    if (!cachedPhotos || now - timestampLastFetch > ONE_HOUR) {
      cachedPhotos = await fetchPhotos();
      timestampLastFetch = now;
    }

    res.status(200).json({
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
