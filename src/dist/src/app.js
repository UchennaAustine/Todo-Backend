"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const taskRouter_1 = require("../route/taskRouter");
const inProgressTaskRouter_1 = require("../route/inProgressTaskRouter");
const authRouter_1 = require("../route/authRouter");
const doneTaskRouter_1 = require("../route/doneTaskRouter");
const App = (app) => {
    app
        .use(express_1.default.json())
        .use((0, cors_1.default)())
        .use("/api/v1", taskRouter_1.router)
        .use("/api/v1/ip", inProgressTaskRouter_1.ipRouter)
        .use("/api/v1/done", doneTaskRouter_1.dRouter)
        .use("/api/v1/auth", authRouter_1.authRouter);
};
exports.App = App;
