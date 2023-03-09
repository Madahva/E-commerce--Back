
import { Sequelize } from "sequelize";
import { config } from "dotenv";



config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT , DB_DEPLOY } = process.env;


// export const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/ecomerce`,
//   {
//     host: DB_PORT,
//     dialect: "postgres",
//     native: false,
//     logging: false,
//   }
// );
export const sequelize = new Sequelize(
  DB_DEPLOY!,
  {
    host: DB_PORT,
    dialect: "postgres",
    native: false,
    logging: false,
  }
);

(async function authenticate() {
  try {
    await sequelize.authenticate();
    console.log("Authenticate has been successful");
  } catch (error) {
    console.log("Authenticate has not been successful:");
  }
})();

(async function seqSync(): Promise<void> {
  try {
    await sequelize.sync({ force: true }).then(() => {
      console.log("Postgres sync has been established successfully.");
    });
  } catch (error) {
    console.error("Unable to sync to the database:", error);
  }
})();


