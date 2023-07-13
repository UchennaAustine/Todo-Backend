import express, { Request, Response } from "express";
import doneTaskModel from "../model/doneTaskModel";

export const createDoneTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { task, priority } = req.body;
    const dtask = await doneTaskModel.create({
      task,
      priority,
    });
    return res.status(201).json({
      message: "Your Task is currently completed",
      data: dtask,
    });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};

export const viewDoneTasks = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const dtasks = await doneTaskModel.find();
    return res.status(200).json({
      message: "Currently, viewing task in progress",
      data: dtasks,
    });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};

export const viewSingleDoneTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { _id } = req.params;
    const dtask = await doneTaskModel.findById(_id);
    return res.status(200).json({
      message: "Currently, viewing completed task",
      data: dtask,
    });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};

export const updateDoneTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { _id } = req.params;
    const { isComplete } = req.body;
    const dtask = await doneTaskModel.findByIdAndUpdate(
      _id,
      {
        isComplete: true,
      },
      { new: true }
    );
    return res.status(201).json({
      message: "Completed Task has being Updated",
      data: dtask,
    });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};

export const deleteDoneTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { _id } = req.params;
    const dtask = await doneTaskModel.findByIdAndDelete(_id);
    return res.status(201).json({
      message: "Completed Task has being Deleted",
    });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};
