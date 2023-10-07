import { useQuery } from "@tanstack/react-query";
import z from "zod";
import { profileSchema } from "@/domains/profiles/schemas";
import { api } from "@/lib/createApi";

export const profilesGet = z.array(profileSchema);

export const getProfiles = api.get("/profiles").returns(profilesGet);

export const useProfiles = () => useQuery({ queryKey: ["profiles"], queryFn: getProfiles });
