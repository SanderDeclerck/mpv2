import { registerMock } from "@/server/registerMock";
import { state } from "@/server/state";
import { postVisitor } from ".";

registerMock(postVisitor, async (req, res) => {
  if (state === "I already have a username with name 'test'") {
    res.json({ error: "usernameAlreadyExists" });
    return;
  }
  const result = { id: 1, ...req.body };
  console.log("server creating visitor", result);
  res.json(result);
});
