import z from "zod";

export const profilesPostParams = z.object({
  profileId: z.number(),
  username: z.string(),
});
export type ProfilesPostParams = z.infer<typeof profilesPostParams>;

export const profilesPostSuccessResponse = z.object({
  id: z.number(),
  profileId: z.number(),
  username: z.string(),
});
export type ProfilesPostSuccessResponse = z.infer<typeof profilesPostSuccessResponse>;

export const profilesPostErrorResponse = z.object({
  error: z.enum(["usernameAlreadyExists", "noRights"]),
});
export type ProfilesPostErrorResponse = z.infer<typeof profilesPostErrorResponse>;
