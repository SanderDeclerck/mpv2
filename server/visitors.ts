import { Express } from "express";

export const registerVisitorRoutes = (app: Express): void => {
  app.get("/visitor/create", (_, res) => {
    setTimeout(() => {}, 1000);
  });

  app.post("/visitor/create", (req, res) => {
    const result = { id: 1, ...req.body };
    console.log("server creating visitor", result);
    res.json(result);
  });
};
