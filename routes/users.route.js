const express = require("express")
const {
  AddUser,
  GetAllUsers,
  GetOneUser,
  UpdateUser,
  DeleteUser,
} = require("../controllers/users.controllers")
const router = express.Router()

/* ADD USER */
router.post("/users", AddUser)

/* GET ALL USERS */
router.get("/users", GetAllUsers)

/* GET ONE USER */
router.get("/users/:id", GetOneUser)

/* UPDATE USER */
router.put("/users/:id", UpdateUser)

/* DELETE USER */
router.delete("/users/:id", DeleteUser)

module.exports = router
