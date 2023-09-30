import { describe } from "node:test";
import { expect, test } from "vitest";
import { postVisitor, visitorPostError, visitorPostSuccess } from ".";
import { setState } from "@/lib/createApi";

describe("create visitor POST", () => {
  test("returns a visitor", async () => {
    await setState("");
    const visitor = await postVisitor({ profileId: 1, username: "test" });

    expect(visitorPostSuccess.safeParse(visitor).success).toBe(true);
  });

  test("validates username", async () => {
    await setState("I already have a username with name 'test'");
    const visitor = await postVisitor({ profileId: 1, username: "test" });

    expect(visitorPostError.safeParse(visitor).success).toBe(true);
  });
});
