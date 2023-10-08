import { describe } from "node:test";
import { test } from "vitest";
import { setState } from "@/lib/createApi";
import { getTriggers } from ".";

describe("get triggers", () => {
  test("returns a trigger", async () => {
    await setState("");
    await getTriggers();
  });
});
