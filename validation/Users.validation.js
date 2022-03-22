const isEmpty = require("./isEmpty")
const validator = require("validator")

module.exports = function validateForm(data) {
  let errors = {}

  data.Email = !isEmpty(data.Email) ? data.Email : ""
  data.FirstName = !isEmpty(data.FirstName) ? data.FirstName : ""
  data.LastName = !isEmpty(data.LastName) ? data.LastName : ""
  data.Age = !isEmpty(data.Age) ? data.Age : ""

  if (!validator.isEmail(data.Email)) {
    errors.Email = "Please enter a valid Email"
  }
  if (validator.isEmpty(data.Email)) {
    errors.Email = "required Email"
  }
  if (validator.isEmpty(data.FirstName)) {
    errors.FirstName = "required FirstName"
  }
  if (validator.isEmpty(data.LastName)) {
    errors.LastName = "required LastName"
  }
  if (validator.isEmpty(data.Age)) {
    errors.Age = "required Age"
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
