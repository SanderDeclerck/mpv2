import { describe } from "node:test";
import { test } from "vitest";
import { setState } from "@/lib/createApi";
import { postTrigger } from ".";

describe("create trigger POST", () => {
  test("returns a trigger", async () => {
    await setState("");
    await postTrigger({
      type: "StatusChange",
      active: true,
      actions: ["SendEmail"],
    });
  });
});
