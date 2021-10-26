const yup = require("yup");

exports.login = yup.object({
  body: yup.object({
    email: yup.string().email().required(),
    password: yup.string().required().min(6),
  }),
});

exports.register = yup.object({
  body: yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(6),
  }),
});
