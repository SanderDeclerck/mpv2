import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { api } from "@/lib/createApi";
import { Trigger } from "../../schemas";

export const getTriggers = api.get("/triggers").returns(z.array(Trigger));

export const useTriggers = () =>
  useQuery({ queryKey: ["triggers"], queryFn: getTriggers });
