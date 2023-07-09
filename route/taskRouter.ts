import express, { Router } from "express"
import { createTasks, deleteTask, getAllTasks, updateTask, viewSingleTask } from "../controllers/taskController"

export const router = Router()

router.route("/").get(getAllTasks)
router.route("/addTasks").post(createTasks)
router.route("/viewTask/:_id").get(viewSingleTask)
router.route("/updateTask/:_id").patch(updateTask)
router.route("/deleteTask/:_id").delete(deleteTask)