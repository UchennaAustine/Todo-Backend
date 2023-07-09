import express, { Request, Response } from "express";
import inProgressModel from "../model/inProgressModel";

export const createInProgressTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { task, priority } = req.body;
    const iptask = await inProgressModel.create({
      task,
      priority,
    });
    return res.status(201).json({
      message: "Your Task is currently in progress",
      data: iptask,
    });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};

export const viewTaskInProgress = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const iptasks = await inProgressModel.find();
    return res.status(200).json({
      message: "Currently, viewing task in progress",
      data: iptasks,
    });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};

export const viewSingleTaskInProgress = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { _id } = req.params;
    const iptask = await inProgressModel.findById(_id);
    return res.status(200).json({
      message: "Currently, viewing task in progress",
      data: iptask,
    });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};

export const updateTaskInProgress = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { _id } = req.params;
    const { isComplete } = req.body;
    const iptask = await inProgressModel.findByIdAndUpdate(
      _id,
      {
        isComplete: true,
      },
      { new: true }
    );
    return res.status(201).json({
      message: "Task in progress has being Updated",
      data: iptask,
    });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};

export const deleteTaskInProgress = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { _id } = req.params;
    const iptask = await inProgressModel.findByIdAndDelete(_id);
    return res.status(201).json({
      message: "Task in progress has being Deleted",
    });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};
