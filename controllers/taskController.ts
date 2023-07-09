import express, { Request, Response } from "express";
import taskModel, { ITaskData } from "../model/taskModel";

export const getAllTasks = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const tasks = await taskModel.find();
    return res.status(200).json({
      message: "All Tasks have being gotten",
      data: tasks,
    });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};

export const createTasks = async (
  req: Request<{}, {}, ITaskData>,
  res: Response
): Promise<Response> => {
  try {
    const { task, priority } = req.body;
    const tasks = await taskModel.create({ task, priority });
    return res.status(201).json({
      message: "Your Task have being Created",
      data: tasks,
    });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};

export const viewSingleTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { _id } = req.params;
    const task = await taskModel.findById(_id);
    return res.status(200).json({
      message: "Single task is being viewed",
      data: task,
    });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};

export const updateTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { _id } = req.params;
    const { task, priority } = req.body;
    const tasks = await taskModel.findByIdAndUpdate(
      _id,
      {
        task,
        priority,
      },
      { new: true }
    );
    return res.status(201).json({
      message: "Your Task has being updated",
      data: tasks,
    });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};

export const deleteTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { _id } = req.params;
    const task = await taskModel.findByIdAndDelete(_id);
    return res.status(201).json({
      message: "Task has being Deleted",
    });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};
