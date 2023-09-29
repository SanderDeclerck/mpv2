import { useMutation } from "@tanstack/react-query";
import {
  ProfilesPostParams,
  profilesPostParams,
  profilesPostSuccessResponse,
  profilesPostErrorResponse,
} from "./schemas";
import { post } from "@/lib/createApi";

export const postVisitor = async (params: ProfilesPostParams) =>
  await post("/visitor/create")
    .body(params, profilesPostParams)
    .returns(profilesPostSuccessResponse.or(profilesPostErrorResponse));

export const useCreateVisitor = () => useMutation({ mutationFn: postVisitor });
