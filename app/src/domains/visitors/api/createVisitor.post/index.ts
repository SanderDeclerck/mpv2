import { useMutation } from "@tanstack/react-query";
import { ProfilesPostParams, profilesPostParams, profilesPostSuccessResponse, profilesPostErrorResponse } from "./schemas";
import { post } from "@/lib/createApi";

export const postVisitor = async (params: ProfilesPostParams) => {
  // Here you can do some custom stuff with the params
  // Like pick an id to build the url with.

  const response = await post("visitor/create")
    .body(params, profilesPostParams)
    .returns(profilesPostSuccessResponse.or(profilesPostErrorResponse));

  // Here you can do some custom stuff with the response
  // No error handling needed, it's already done by the api

  return response;
};

export const useCreateVisitor = () => useMutation({ mutationFn: postVisitor });
