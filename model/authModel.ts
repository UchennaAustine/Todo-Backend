import mongoose, { Schema } from "mongoose";
import { IAuth, ITask } from "../utils/Interfaces";

export interface IAuthData extends IAuth, mongoose.Document {}

const authSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      min: 8,
    },
    avatar: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IAuthData>("auths", authSchema);
