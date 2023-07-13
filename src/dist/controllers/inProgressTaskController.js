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
exports.deleteTaskInProgress = exports.updateTaskInProgress = exports.viewSingleTaskInProgress = exports.viewTaskInProgress = exports.createInProgressTask = void 0;
const inProgressModel_1 = __importDefault(require("../model/inProgressModel"));
const createInProgressTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { task, priority } = req.body;
        const iptask = yield inProgressModel_1.default.create({
            task,
            priority,
        });
        return res.status(201).json({
            message: "Your Task is currently in progress",
            data: iptask,
        });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.createInProgressTask = createInProgressTask;
const viewTaskInProgress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const iptasks = yield inProgressModel_1.default.find();
        return res.status(200).json({
            message: "Currently, viewing task in progress",
            data: iptasks,
        });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.viewTaskInProgress = viewTaskInProgress;
const viewSingleTaskInProgress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const iptask = yield inProgressModel_1.default.findById(_id);
        return res.status(200).json({
            message: "Currently, viewing task in progress",
            data: iptask,
        });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.viewSingleTaskInProgress = viewSingleTaskInProgress;
const updateTaskInProgress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const { isComplete } = req.body;
        const iptask = yield inProgressModel_1.default.findByIdAndUpdate(_id, {
            isComplete: true,
        }, { new: true });
        return res.status(201).json({
            message: "Task in progress has being Updated",
            data: iptask,
        });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.updateTaskInProgress = updateTaskInProgress;
const deleteTaskInProgress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const iptask = yield inProgressModel_1.default.findByIdAndDelete(_id);
        return res.status(201).json({
            message: "Task in progress has being Deleted",
        });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.deleteTaskInProgress = deleteTaskInProgress;
