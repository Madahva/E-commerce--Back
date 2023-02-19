import express, { Application } from "express";
import cors from "cors";
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import routes from "./src/Routes/index";

const server: Application = express();

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());
server.use(routes);



const PORT: string | number = process.env.PORT || 3000;

server.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);

export default server