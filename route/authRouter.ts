import express, { Router } from "express";
import { readUser } from "../controllers/authController";

export const authRouter = Router();

authRouter.route("/").get(readUser);
