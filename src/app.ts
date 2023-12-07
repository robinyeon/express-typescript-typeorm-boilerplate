import express from "express";
import { Express, Request, Response } from "express";
import { User } from "./entities/user.entity";
import { myDataSource } from "./data-source.ts";
import dotenv from "dotenv";
import userRouter from "./routes/user.router";

dotenv.config();

myDataSource
  .initialize()
  .then(() => console.log("DB INITIALIZED"))
  .catch((error) => console.warn(error));

const app: Express = express();

app.use(express.json());

app.use(userRouter);

app.listen(process.env.DB_PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${process.env.DB_PORT}`);
});
