import { RequestHandler } from "express";
import { app } from "./app";
import { PostFn } from "@/lib/createApi";

export const registerMock = <B, R>(apiCall: PostFn<B, R>, handler: RequestHandler) => {
  app.post(apiCall.url, handler);
};
