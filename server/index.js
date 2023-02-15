const server = require("./db.js");
const sequelize = require("./indexdb.js");
const { config } = require("dotenv");

config();

const PORT = process.env.PORT;

(async function startServer() {
  try {
    server.listen(PORT, () =>
      console.log(`Server running on port http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log("Unable to initiate", error);
  }
})();

(async () => {
  try {
    sequelize.then(() => console.log("Authenticate has been successfull"));
  } catch (error) {
    //console.log("Authenticate has not been succesfull");
  }
})();
