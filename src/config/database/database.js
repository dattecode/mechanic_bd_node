const {Sequelize} = require("sequelize")
const envs = require("../enviroments/enviroments")

const sequelize = new Sequelize(envs.URL, {
  logging: false,
})

const authenticated = async () => {
  try {
    await sequelize.authenticate()
    console.log("authenticate on");
  } catch (error) {
    console.log(error);
  }
}

const syncUp = async() => {
  try {
    await sequelize.sync()
    console.log("Db sync on");
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  authenticated,
  syncUp,
  sequelize
}