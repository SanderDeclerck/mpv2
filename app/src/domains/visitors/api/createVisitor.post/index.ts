import { useMutation } from "@tanstack/react-query";
import { profilesPostParams, profilesPostSuccessResponse, profilesPostErrorResponse } from "./schemas";
import { post } from "@/lib/createApi";

export const postVisitor = post("/visitor/create")
  .body(profilesPostParams)
  .returns(profilesPostSuccessResponse.or(profilesPostErrorResponse));

export const useCreateVisitor = () => useMutation({ mutationFn: postVisitor });
