import express, { json } from "express";
import cors from "cors";
import { registerVisitorRoutes } from "./visitors";
import { registerProfileRoutes } from "./profiles";
import { setState } from "./state";

const app = express();
const port = 4000;

app.use(cors({ origin: "*" }));

app.use((req, res, next) => {
  // res.set("Cache-Control", "no-cache, no-transform");
  next();
});

app.use(json());

registerVisitorRoutes(app);
registerProfileRoutes(app);

app.get("/", (_, res) => {
  res.send("Hello World!!!!");
});

app.get("/setState", (req, res) => {
  const state = req.query.state as string;
  console.log("server setting state", state);
  setState(state);
  res.sendStatus(201);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
