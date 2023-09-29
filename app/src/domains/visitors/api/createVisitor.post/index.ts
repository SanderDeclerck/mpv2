import { useMutation } from "@tanstack/react-query";
import { post } from "@/lib/createApi";
import { z } from "zod";

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

export const postVisitor = post("/visitor/create")
  .body(profilesPostParams)
  .returns(profilesPostSuccessResponse.or(profilesPostErrorResponse));

export const useCreateVisitor = () => useMutation({ mutationFn: postVisitor });
