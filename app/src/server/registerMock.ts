import { type Express } from "express";
import { app } from "./app";

export const registerMock = (fun: (app: Express) => void) => {
  console.log("registering");
  fun(app);
};
