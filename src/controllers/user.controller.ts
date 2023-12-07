import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/user.service";
import { createUser } from "../types/user.type";

export class UserController {
  private userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const newUserInfo: createUser = req.body;
      const createdUser = this.userService.createUser(newUserInfo);
      return res.json({
        status: "201",
        message: "Successfully created the user.",
        data: createdUser,
      });
    } catch (error) {
      next(error);
    }
  }
}
