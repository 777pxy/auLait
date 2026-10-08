import { NextFunction, Request, Response } from "express";
import { service } from "./service";

export async function getUser(req: Request, res: Response, next: NextFunction) {
  const user = await service.getByID(req.params.id[0]);
  res.status(200).json(user);
}

export async function createUser(req: Request, res: Response) {
  const user = await service.create(req.body);
  res.status(201).json(user);
}
