import { RequestHandler } from "express";
import { PostFn } from "@/lib/createApi";
import { app } from "./app";

export const registerMock = <Body, Response>(
  apiCall: PostFn<Body, Response>,
  handler: RequestHandler<undefined, Response, Body>,
) => {
  app.post(apiCall.url, handler);
};
