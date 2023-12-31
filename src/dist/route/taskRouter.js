"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const taskController_1 = require("../controllers/taskController");
exports.router = (0, express_1.Router)();
exports.router.route("/").get(taskController_1.getAllTasks);
exports.router.route("/addTasks").post(taskController_1.createTasks);
exports.router.route("/viewTask/:_id").get(taskController_1.viewSingleTask);
exports.router.route("/updateTask/:_id").patch(taskController_1.updateTask);
exports.router.route("/deleteTask/:_id").delete(taskController_1.deleteTask);
