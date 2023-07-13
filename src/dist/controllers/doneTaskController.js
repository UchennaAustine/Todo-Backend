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
exports.deleteDoneTask = exports.updateDoneTask = exports.viewSingleDoneTask = exports.viewDoneTasks = exports.createDoneTask = void 0;
const doneTaskModel_1 = __importDefault(require("../model/doneTaskModel"));
const createDoneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { task, priority } = req.body;
        const dtask = yield doneTaskModel_1.default.create({
            task,
            priority,
        });
        return res.status(201).json({
            message: "Your Task is currently completed",
            data: dtask,
        });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.createDoneTask = createDoneTask;
const viewDoneTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dtasks = yield doneTaskModel_1.default.find();
        return res.status(200).json({
            message: "Currently, viewing task in progress",
            data: dtasks,
        });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.viewDoneTasks = viewDoneTasks;
const viewSingleDoneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const dtask = yield doneTaskModel_1.default.findById(_id);
        return res.status(200).json({
            message: "Currently, viewing completed task",
            data: dtask,
        });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.viewSingleDoneTask = viewSingleDoneTask;
const updateDoneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const { isComplete } = req.body;
        const dtask = yield doneTaskModel_1.default.findByIdAndUpdate(_id, {
            isComplete: true,
        }, { new: true });
        return res.status(201).json({
            message: "Completed Task has being Updated",
            data: dtask,
        });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.updateDoneTask = updateDoneTask;
const deleteDoneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const dtask = yield doneTaskModel_1.default.findByIdAndDelete(_id);
        return res.status(201).json({
            message: "Completed Task has being Deleted",
        });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.deleteDoneTask = deleteDoneTask;
