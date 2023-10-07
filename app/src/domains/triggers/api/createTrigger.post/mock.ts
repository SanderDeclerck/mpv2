import { registerMock } from "@/server/registerMock";
import { postTrigger } from ".";

registerMock(postTrigger, async (req, res) => {
  const result = { id: "123", ...req.body };
  console.log("server creating trigger", result);
  res.json(result);
});
