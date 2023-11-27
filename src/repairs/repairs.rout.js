const express = require("express");
const {
  findRepairs,
  findRepairsById,
  createRepair,
  updateRepair,
  deleteRepair,
} = require("./repairs.controller");


const route = express.Router();

//motos pendientes
route.get("/", findRepairs);

//moto pendiente a reparar por su id
route.get("/:id", findRepairsById);

//crear una cita debe tener fecha y la id del usuario que la crea
route.post("/", createRepair);

//actualiza el trabajo a complet
route.patch("/:id", updateRepair);

//actualiza el trabajo a cancelado
route.delete("/:id", deleteRepair);

module.exports = route;
