"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.viewSingleTask = exports.createTasks = exports.getAllTasks = void 0;
const taskModel_1 = __importDefault(require("../model/taskModel"));
const getAllTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield taskModel_1.default.find();
        return res.status(200).json({
            message: "All Tasks have being gotten",
            data: tasks,
        });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.getAllTasks = getAllTasks;
const createTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { task, priority } = req.body;
        const tasks = yield taskModel_1.default.create({ task, priority });
        return res.status(201).json({
            message: "Your Task have being Created",
            data: tasks,
        });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.createTasks = createTasks;
const viewSingleTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const task = yield taskModel_1.default.findById(_id);
        return res.status(200).json({
            message: "Single task is being viewed",
            data: task,
        });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.viewSingleTask = viewSingleTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const { task, priority } = req.body;
        const tasks = yield taskModel_1.default.findByIdAndUpdate(_id, {
            task,
            priority,
        }, { new: true });
        return res.status(201).json({
            message: "Your Task has being updated",
            data: tasks,
        });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const task = yield taskModel_1.default.findByIdAndDelete(_id);
        return res.status(201).json({
            message: "Task has being Deleted",
        });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.deleteTask = deleteTask;
