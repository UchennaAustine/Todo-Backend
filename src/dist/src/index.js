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
const express_1 = __importDefault(require("express"));
const envVariables_1 = require("../config/envVariables");
const DB_1 = require("../config/DB");
const app_1 = require("./app");
const port = envVariables_1.envVariables.port;
const app = (0, express_1.default)();
const server = app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    (0, app_1.App)(app);
    yield (0, DB_1.dbConnect)();
    console.log(`Server is up and running on ${port}🚀`);
}));
process.on("uncaughtException", (error) => {
    console.log("This is an uncaughtException Error", error.message);
    process.exit(1);
});
process.on("unhandledRejection", (reason) => {
    console.log("unhandledRejection");
    console.log("This is an unhandledRejection", reason);
    server.close(() => {
        process.exit(1);
    });
});
server;
