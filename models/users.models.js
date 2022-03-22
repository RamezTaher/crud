const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserScheme = new Schema(
  {
    Email: String,
    LastName: String,
    FirstName: String,
    Age: String,
  },
  { timestamps: true }
)

module.exports = mongoose.model("users", UserScheme)
