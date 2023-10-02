import { useQuery } from "@tanstack/react-query";
import z from "zod";
import { api } from "@/lib/createApi";

export const profilesGet = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
  }),
);

export const getProfiles = api.get("/profiles").returns(profilesGet);

export const useProfiles = () => useQuery({ queryKey: ["profiles"], queryFn: getProfiles });
