import express, { Router } from "express";
import {
  createDoneTask,
  deleteDoneTask,
  updateDoneTask,
  viewDoneTasks,
  viewSingleDoneTask,
} from "../controllers/doneTaskController";

export const dRouter = Router();

dRouter.route("/createDoneTask").post(createDoneTask);
dRouter.route("/viewDoneTasks").get(viewDoneTasks);
dRouter.route("/viewSingleDoneTask/:_id").get(viewSingleDoneTask);
dRouter.route("/updateDoneTask/:_id").patch(updateDoneTask);
dRouter.route("/deleteDoneTask/:_id").delete(deleteDoneTask);
