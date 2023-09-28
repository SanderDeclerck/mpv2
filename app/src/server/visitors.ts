import { Express } from "express";

export const registerVisitorRoutes = (app: Express): void => {
  app.get("/visitor/create", (_, _res) => {
    setTimeout(() => {}, 1000);
  });
};
