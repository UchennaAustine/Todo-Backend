import express, { Application } from "express";
import cors from "cors";
import { router } from "../route/taskRouter";
import { ipRouter } from "../route/inProgressTaskRouter";
import { authRouter } from "../route/authRouter";

export const App = (app: Application) => {
  app
    .use(express.json())
    .use(cors())
    .use("/api/v1", router)
    .use("/api/v1/ip", ipRouter)
    .use("/api/v1/auth", authRouter);
};
