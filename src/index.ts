import express, { Application } from "express";
import { envVariables } from "../config/envVariables";
import { dbConnect } from "../config/DB";
import { App } from "./app";

const port = envVariables.port;

const app: Application = express();

const server = app.listen(port, async () => {
  App(app);
  await dbConnect();
  console.log(`Server is up and running on ${port}🚀`);
});

process.on("uncaughtException", (error: any) => {
  console.log("This is an uncaughtException Error", error.message);
  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  console.log("unhandledRejection");
  console.log("This is an unhandledRejection", reason);

  server.close(() => {
    process.exit(1);
  });
});

server;
