require("dotenv").config()
const env = require("env-var")

const envs = {
  PORT : env.get("PORT").required().asPortNumber(),
  URL : env.get("URL").required().asString()
}

module.exports = envs
