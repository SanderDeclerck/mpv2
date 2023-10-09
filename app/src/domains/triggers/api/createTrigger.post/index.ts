import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { api } from "@/lib/createApi";
import { CreateTrigger, Trigger } from "../../schemas";

export const triggerPostSuccess = z.array(Trigger);

export const postTrigger = api
  .post("/triggers/create")
  .body(CreateTrigger)
  .returns(triggerPostSuccess);

export const useCreateTrigger = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postTrigger,
    onSuccess: (data) => {
      queryClient.setQueryData(["triggers"], data);
    },
  });
};
