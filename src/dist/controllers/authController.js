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
exports.signIn_Account = exports.createAccount = exports.deleteUserAccount = exports.updateUserInfo = exports.viewUser = exports.viewUsers = void 0;
const authModel_1 = __importDefault(require("../model/authModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const viewUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield authModel_1.default.find();
        if (user.length <= 0) {
            return res.status(404).json({
                message: "No Available Users For Now",
            });
        }
        return res.status(200).json({
            message: "Gotten All Users",
            data: user,
        });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.viewUsers = viewUsers;
const viewUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const user = yield authModel_1.default.findById(_id);
        if (!user) {
            return res.status(404).json({
                message: "Invalid _ID No. ",
            });
        }
        return res.status(200).json({
            message: "This is the allocated User for this _ID ",
            data: user,
        });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.viewUser = viewUser;
const updateUserInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const { userName, avatar } = req.body;
        const Avatar = userName.charAt(0);
        const user = yield authModel_1.default.findByIdAndUpdate(_id, {
            userName,
            avatar: Avatar,
        }, { new: true });
        return res.status(201).json({
            message: "This is the allocated User for this _ID ",
            data: user,
        });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.updateUserInfo = updateUserInfo;
const deleteUserAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const user = yield authModel_1.default.findByIdAndDelete(_id);
        return res.status(200).json({
            message: "This User's Account has being Deleted",
        });
    }
    catch (error) {
        return res.status(404).json({ messsage: error.message });
    }
});
exports.deleteUserAccount = deleteUserAccount;
//Creating a user account(Sign-Up)
const createAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userName, avatar, email, password } = req.body;
        const Avatar = userName.charAt(0);
        const salt = yield bcrypt_1.default.genSalt(5);
        const hash = yield bcrypt_1.default.hash(password, salt);
        const user = yield authModel_1.default.create({
            userName,
            email,
            avatar: Avatar,
            password: hash,
        });
        return res.status(201).json({
            message: "User Account has being Created",
            data: user,
        });
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.createAccount = createAccount;
const signIn_Account = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield authModel_1.default.findOne({ email });
        if (user) {
            const encrypted = yield bcrypt_1.default.compare(password, user.password);
            if (encrypted) {
                return res.status(201).json({
                    message: `Welcome Back ${user.userName}`,
                });
            }
            else {
                return res.status(404).json({
                    message: "Invalid Password",
                });
            }
        }
        else {
            return res.status(404).json({
                message: "User not found",
            });
        }
    }
    catch (error) {
        return res.status(404).json({ message: error.message });
    }
});
exports.signIn_Account = signIn_Account;
