import { RequestHandler } from "express";
import { GetFn, PostFn } from "@/lib/createApi";
import { app } from "./app";

export const registerMock = <Body, Response>(
  apiCall: GetFn<Response> | PostFn<Body, Response>,
  handler: RequestHandler<undefined, Response, Body>,
) => {
  if (apiCall.method === "get") {
    app.get(apiCall.url, handler);
    return;
  } else if (apiCall.method === "post") {
    app.post(apiCall.url, handler);
    return;
  } else {
    throw new Error(
      "Unsupported method " + apiCall.method + ". See registerMock.ts",
    );
  }
};
