import { api } from "@/lib/createApi";
import { useQuery } from "@tanstack/react-query";
import z from "zod";

export const profilesGet = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
  })
);

export const getProfiles = api.get("/profiles").returns(profilesGet);

export const useProfiles = () => useQuery({ queryKey: ["profiles"], queryFn: getProfiles });
