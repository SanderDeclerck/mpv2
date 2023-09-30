import { RequestHandler } from "express";
import { app } from "./app";
import { PostFn } from "@/lib/createApi";

export const registerMock = <Body, Response>(
  apiCall: PostFn<Body, Response>,
  handler: RequestHandler<undefined, Response, Body>
) => {
  app.post(apiCall.url, handler);
};
