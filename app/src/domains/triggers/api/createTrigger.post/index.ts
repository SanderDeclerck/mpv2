import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/createApi";
import { CreateTrigger, Trigger } from "../../schemas";

export const triggerPostSuccess = Trigger;

export const postTrigger = api
  .post("/triggers/create")
  .body(CreateTrigger)
  .returns(triggerPostSuccess);

export const useCreateTrigger = () => useMutation({ mutationFn: postTrigger });
