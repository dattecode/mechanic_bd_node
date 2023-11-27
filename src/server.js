const app = require("./app");
const envs = require("./config/enviroments/enviroments");
const { authenticated, syncUp } = require("./config/database/database");

async function main() {
  try {
    await authenticated();
    await syncUp();
  } catch (error) {
    console.log(error);
  }
}

main();

app.listen(envs.PORT, () => {
  console.log(`port: ${envs.PORT}`);
});
