const express = require("express");
const {
  findAllUsers,
  getUserById,
  createUsers,
  updateDataUsers,
  deleteUSers,
} = require("./users.controller");

const route = express.Router();

route.get("/", findAllUsers);

route.get("/:id", getUserById);

route.post("/", createUsers);

route.patch("/:id", updateDataUsers);

route.delete("/:id", deleteUSers); 

module.exports = route;
