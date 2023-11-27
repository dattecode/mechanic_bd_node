const express = require("express")
const usersRoute = require("./users/users.rout")
const repairsRoute = require("./repairs/repairs.rout")

//app 
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//rutas
app.use("/api/v1/repairs", repairsRoute)
app.use("/api/v1/users", usersRoute)


module.exports = app
