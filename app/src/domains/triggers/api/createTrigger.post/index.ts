import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/createApi";
import { Trigger } from "../../schemas";

export const CreateTriggerSchema = Trigger.omit({ id: true });

export const triggerPostSuccess = Trigger;

export const postTrigger = api
  .post("/triggers/create")
  .body(CreateTriggerSchema)
  .returns(triggerPostSuccess);

export const useCreateVisitor = () => useMutation({ mutationFn: postTrigger });
