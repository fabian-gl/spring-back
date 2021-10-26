exports.login = async (req, res) => {
  res.status(200).json({ ok: true, data: "login" });
};

exports.register = async (req, res) => {
  res.status(200).json({ ok: true, data: "register" });
};
