// validation to check for proper email and password upon login.

const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function (data) {
  let errors = {};

  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Invalid email";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email cannot be blank";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password cannot be blank";
  }

  // return object with errors object and isValid check that existance of errors is true or false.
  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
