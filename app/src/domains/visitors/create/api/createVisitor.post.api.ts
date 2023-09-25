import { useMutation } from "@tanstack/react-query";
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

export type ProfilesPostResponse = ProfilesPostSuccessResponse | ProfilesPostErrorResponse;

export const postVisitor = async (params: ProfilesPostParams): Promise<ProfilesPostResponse> => {
  profilesPostParams.parse(params);
  const response = await fetch(import.meta.env.VITE_API + "/profiles", { method: "POST", body: JSON.stringify(params) });
  const json = await response.json();
  const validated = profilesPostSuccessResponse.or(profilesPostErrorResponse).parse(json);
  return validated;
};

export const useCreateVisitor = () => useMutation({ mutationFn: postVisitor });
