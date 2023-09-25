export const foo = "bar";
import { describe } from "node:test";
import { expect, test } from "vitest";
import { postVisitor, profilesPostErrorResponse, profilesPostSuccessResponse } from "./createVisitor.post.api";

const setState = async (state: string) => {
  await fetch(import.meta.env.VITE_API + "/setState?state=" + state);
};

describe("create visitor POST", () => {
  test("returns a visitor", async () => {
    const visitor = await postVisitor({ profileId: 1, username: "test" });

    expect(profilesPostSuccessResponse.safeParse(visitor).success).toBe(true);
  });

  //   test("validates username", async () => {
  //     await setState("I already have a username with name 'test'");
  //     const visitor = await postVisitor({ profileId: 1, username: "test" });

  //     expect(profilesPostErrorResponse.parse(visitor)).not.toThrow();
  //   });
});
