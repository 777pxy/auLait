import next from "express";
import { repository } from "./repository";

type CreateUserInput = {
  username: string;
  email: string;
  biography?: string;
};

export const service = {
  getByID(id: string) {
    const user = repository.findByID(id);
    if (!user) throw new Error("user does not exist");
    return user;
  },
  create(user: CreateUserInput) {
    const createdUser = repository.create(user);
    if (!user) throw new Error("failed to create user");
    return createdUser;
  },
};
