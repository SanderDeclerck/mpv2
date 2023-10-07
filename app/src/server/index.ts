import cors from "cors";
import { json } from "express";
import { glob } from "glob";
import { app } from "./app";
import { registerProfileRoutes } from "./profiles";
import { setState } from "./state";
import { registerVisitorRoutes } from "./visitors";

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

// import all mocks
const mockFiles = glob.sync("**/api/**/**?(.)mock.ts", {
  ignore: ["node_modules/**"],
});
mockFiles.forEach(require);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
