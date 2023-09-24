import { Express } from "express";

export const registerVisitorRoutes = (app: Express): void => {
  app.get("/visitor/create", (_, res) => {
    setTimeout(() => {}, 1000);
  });
};
