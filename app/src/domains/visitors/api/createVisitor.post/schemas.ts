import z from "zod";

export const profilesPostParams = z.object({
  profileId: z.number(),
  username: z.string(),
});

export const profilesPostSuccessResponse = z.object({
  id: z.number(),
  profileId: z.number(),
  username: z.string(),
});

export const profilesPostErrorResponse = z.object({
  error: z.enum(["usernameAlreadyExists", "noRights"]),
});
