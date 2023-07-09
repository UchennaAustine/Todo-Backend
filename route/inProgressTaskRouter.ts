import express, { Router } from "express";
import {
  createInProgressTask,
  deleteTaskInProgress,
  updateTaskInProgress,
  viewSingleTaskInProgress,
  viewTaskInProgress,
} from "../controllers/inProgressTaskController";

export const ipRouter = Router();

ipRouter.route("/viewTaskInProgress").get(viewTaskInProgress);
ipRouter.route("/addTaskInProgress").post(createInProgressTask);
ipRouter.route("/viewTaskInProgress/:_id").get(viewSingleTaskInProgress);
ipRouter.route("/updateTaskInProgress/:_id").patch(updateTaskInProgress);
ipRouter.route("/deleteTaskInProgress/:_id").delete(deleteTaskInProgress);
