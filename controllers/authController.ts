import express, { Request, Response } from "express";
import authModel, { IAuthData } from "../model/authModel";

export const readUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const user = await authModel.find();
    if (user.length <= 0) {
      return res.status(200).json({
        message: "No Available Users For Now",
      });
    }
    return res.status(200).json({
      message: "Gotten All Users",
      data: user,
    });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};

export const readOneUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { _id } = req.params;
    const user = await authModel.findById(_id);
    if (!user) {
      return res.status(200).json({
        message: "Invalid _ID No. ",
      });
    }
    return res.status(200).json({
      message: "This is the allocated User for this _ID ",
      data: user,
    });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { _id } = req.params;
    const { userName, avatar } = req.body;
    const Avatar = userName.charAt(0);
    const user = await authModel.findByIdAndUpdate(
      _id,
      {
        userName,
        avatar: Avatar,
      },
      { new: true }
    );
    return res.status(201).json({
      message: "This is the allocated User for this _ID ",
      data: user,
    });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};
