import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/createApi";
import { triggerSchema } from "../../schemas";

export const CreateTriggerSchema = triggerSchema.omit({ id: true });

export const triggerPostSuccess = triggerSchema;

export const postTrigger = api.post("/triggers/create").body(CreateTriggerSchema).returns(triggerPostSuccess);

export const useCreateVisitor = () => useMutation({ mutationFn: postTrigger });
