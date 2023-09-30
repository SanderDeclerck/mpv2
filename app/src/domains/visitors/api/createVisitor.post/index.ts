import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/createApi";
import { z } from "zod";

export const visitorPostBody = z.object({
  profileId: z.number(),
  username: z.string(),
});

export const visitorPostSuccess = z.object({
  id: z.number(),
  profileId: z.number(),
  username: z.string(),
});

export const visitorPostError = z.object({
  error: z.enum(["usernameAlreadyExists", "noRights"]),
});

export const postVisitor = api
  .post("/visitor/create")
  .body(visitorPostBody)
  .returns(visitorPostSuccess.or(visitorPostError));

export const useCreateVisitor = () => useMutation({ mutationFn: postVisitor });
