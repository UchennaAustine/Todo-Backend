"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const envVariables_1 = require("./envVariables");
dotenv_1.default.config();
const mongooseString = envVariables_1.envVariables.MONGODB_STRING;
const dbConnect = () => {
    mongoose_1.default.connect(mongooseString).then(() => {
        console.log("Connection has being established");
    });
};
exports.dbConnect = dbConnect;
