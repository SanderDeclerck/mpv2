import express from "express";
import cors from "cors";
import { registerVisitorRoutes } from "./visitors";
import { registerProfileRoutes } from "./profiles";

const app = express();
const port = 4000;

app.use(cors({ origin: "*" }));

app.use((req, res, next) => {
  // res.set("Cache-Control", "no-cache, no-transform");
  next();
});

registerVisitorRoutes(app);
registerProfileRoutes(app);

app.get("/", (_, res) => {
  res.send("Hello World!!!!");
});

// app.get("/tasks", (_, res) => {
//   setTimeout(() => {
//     return res.json(getTasks());
//   }, 3000);
// });

// app.get("/tasks/:id/complete", (req, res) => {
//   const id = req.params.id;
//   tasks = tasks.filter((_) => _.id.toString() != id);
//   console.log(tasks);
//   setTimeout(() => {
//     res.json(tasks);
//   }, 1000);
// });

// app.post("/tasks/create", (req, res) => {
//   const id = generateId();
//   tasks = [
//     ...tasks,
//     {
//       id: generateId(),
//       label: "New task " + id,
//     },
//   ];
//   console.log(tasks);
//   setTimeout(() => {
//     res.json(tasks);
//   }, 2000);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
