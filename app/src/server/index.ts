import { json } from "express";
import cors from "cors";
import { registerVisitorRoutes } from "./visitors";
import { registerProfileRoutes } from "./profiles";
import { setState } from "./state";
import { app } from "./app";
import { glob } from "glob";

const port = 4000;

app.use(cors({ origin: "*" }));

app.use((_req, _res, next) => {
  // res.set("Cache-Control", "no-cache, no-transform");
  next();
});

app.use(json());

registerVisitorRoutes(app);
registerProfileRoutes(app);

app.get("/", (_, res) => {
  res.send("Hello World from the mockserver!!!!");
});

app.get("/setState", (req, res) => {
  const state = req.query.state as string;
  console.log("Setting state", state);
  setState(state);
  res.sendStatus(201);
});

const mockFiles = glob.sync("**/api/**/**?(.)mock.ts", { ignore: ["node_modules/**"] });

mockFiles.forEach(require);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
