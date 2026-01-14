import express from "express";
import {
  createUser,
  deleteUserById,
  getAllUsers,
} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/users", createUser);
userRouter.get("/users", getAllUsers);
userRouter.delete("/users/:_id", deleteUserById);

export default userRouter;
