import { Express } from "express";
import { state } from "./state";

export const registerVisitorRoutes = (app: Express): void => {
  app.get("/visitor/create", (_, res) => {
    setTimeout(() => {}, 1000);
  });

  app.post("/visitor/create", (req, res) => {
    if (state === "I already have a username with name 'test'") {
      res.json({ error: "usernameAlreadyExists" });
      return;
    }
    const result = { id: 1, ...req.body };
    console.log("server creating visitor", result);
    res.json(result);
  });
};
