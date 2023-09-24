import { useQuery } from "@tanstack/react-query";
import z from "zod";

export const profilesGetResponse = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
  })
);

export type ProfilesGetResponse = z.infer<typeof profilesGetResponse>;

export const getProfiles = async () => {
  const response = await fetch(import.meta.env.VITE_API + "/profiles");
  const json = await response.json();
  const validated = profilesGetResponse.parse(json);
  return validated;
};

export const useProfiles = () => useQuery({ queryKey: ["profiles"], queryFn: getProfiles });
