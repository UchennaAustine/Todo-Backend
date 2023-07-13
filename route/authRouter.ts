import express, { Router } from "express";
import {
  createAccount,
  deleteUserAccount,
  signIn_Account,
  updateUserInfo,
  viewUser,
  viewUsers,
} from "../controllers/authController";

export const authRouter = Router();

authRouter.route("/viewUsers").get(viewUsers);
authRouter.route("/viewUser/:_id").get(viewUser);
authRouter.route("/updateUserInfo/:_id").patch(updateUserInfo);
authRouter.route("/deleteUserAccount/:_id").delete(deleteUserAccount);
authRouter.route("/createAccount").post(createAccount);
authRouter.route("/signIn_Account").post(signIn_Account);
