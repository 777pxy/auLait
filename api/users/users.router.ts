import { Router } from "express";
import { createUser, getUser } from "./users.controller";

const userRouter = Router();

userRouter.get("/:id", getUser, (req, res) => {
  res.send(`GET user request for ${req.params.id}`);
});
userRouter.post("/", createUser);

export default userRouter;
