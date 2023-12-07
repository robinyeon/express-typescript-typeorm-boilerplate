import { UserController } from "../controllers/user.controller";
import { Router } from "express";

const userRouter = Router();

const userController = new UserController();

userRouter.post("/create", userController.createUser);

export default userRouter;
