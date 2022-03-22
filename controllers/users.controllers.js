const Users = require("../models/users.models")
const validateForm = require("../validation/Users.validation")

const AddUser = async (req, res) => {
  const { errors, isValid } = validateForm(req.body)

  try {
    if (!isValid) {
      res.status(404).json(errors)
     
    } else {
      await Users.findOne({ Email: req.body.Email }).then(async (exist) => {
        if (exist) {
          errors.Email = "User Exist"
          res.status(404).json(errors)
        } else {
          await Users.create(req.body)
          res.status(201).json({ message: "User added with success" })
        }
      })
    }
  } catch (error) {
    console.log(error.message)
  }
}

const GetAllUsers = async (req, res) => {
  try {
    const data = await Users.find()
    res.status(201).json(data)
  } catch (error) {
    console.log(error.message)
  }
}
const GetOneUser = async (req, res) => {
  try {
    const data = await Users.findOne({ _id: req.params.id })
    res.status(201).json(data)
  } catch (error) {
    console.log(error.message)
  }
}
const UpdateUser = async (req, res) => {
  const { errors, isValid } = validateForm(req.body)
  try {
    if (!isValid) {
      res.status(404).json(errors)
    } else {
      const data = await Users.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true }
      )
      res.status(201).json(data)
    }
  } catch (error) {
    console.log(error.message)
  }
}
const DeleteUser = async (req, res) => {
  try {
    await Users.deleteOne({ _id: req.params.id })
    res.status(201).json({ message: "User deleted successfully" })
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = {
  AddUser,
  GetAllUsers,
  GetOneUser,
  UpdateUser,
  DeleteUser,
}
