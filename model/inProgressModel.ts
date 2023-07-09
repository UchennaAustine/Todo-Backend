import mongoose, { Schema } from "mongoose";
import { ITask } from "../utils/Interfaces";

export interface ITaskData extends ITask, mongoose.Document {}

const inProgressTaskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      trim: true,
    },
    priority: {
      type: String,
    },
    isComplete: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model<ITaskData>(
  "inProgressTasks",
  inProgressTaskSchema
);
