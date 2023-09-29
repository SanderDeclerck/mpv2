import { RequestHandler, type Express } from "express";
import { app } from "./app";
import { PostFn } from "@/lib/createApi";

export const registerMock = <B, R>(apiCall: PostFn<B, R>, handler: RequestHandler) => {
  console.log("registering");
  app.post(apiCall.url, handler);
};

export const registerMockOld = (fun: (app: Express) => void) => {
  console.log("registering");
  fun(app);
};
