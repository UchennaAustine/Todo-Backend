import express, { Request, Response } from "express";
import authModel, { IAuthData } from "../model/authModel";
import bcyprt from "bcrypt";

export const viewUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const user = await authModel.find();
    if (user.length <= 0) {
      return res.status(404).json({
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

export const viewUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { _id } = req.params;
    const user = await authModel.findById(_id);
    if (!user) {
      return res.status(404).json({
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

export const updateUserInfo = async (
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

export const deleteUserAccount = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { _id } = req.params;
    const user = await authModel.findByIdAndDelete(_id);
    return res.status(200).json({
      message: "This User's Account has being Deleted",
    });
  } catch (error: any) {
    return res.status(404).json({ messsage: error.message });
  }
};

//Creating a user account(Sign-Up)
export const createAccount = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userName, avatar, email, password } = req.body;
    const Avatar = userName.charAt(0);
    const salt = await bcyprt.genSalt(5);
    const hash = await bcyprt.hash(password, salt);

    const user = await authModel.create({
      userName,
      email,
      avatar: Avatar,
      password: hash,
    });
    return res.status(201).json({
      message: "User Account has being Created",
      data: user,
    });
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};

export const signIn_Account = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.body;
    const user = await authModel.findOne({ email });
    if (user) {
      const encrypted = await bcyprt.compare(password, user.password!);
      if (encrypted) {
        return res.status(201).json({
          message: `Welcome Back ${user.userName}`,
        });
      } else {
        return res.status(404).json({
          message: "Invalid Password",
        });
      }
    } else {
      return res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error: any) {
    return res.status(404).json({ message: error.message });
  }
};
