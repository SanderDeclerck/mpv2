import { useQuery } from "@tanstack/react-query";
import z from "zod";

export const profilesPostParams = z.object({
  profileId: z.number(),
  username: z.string(),
});

export type ProfilesPostParams = z.infer<typeof profilesPostParams>;

export const postVisitor = async (params: ProfilesPostParams) => {
  profilesPostParams.parse(params);
  const response = await fetch(import.meta.env.VITE_API + "/profiles");
  const json = await response.json();
  const validated = profilesGetResponse.parse(json);
  return validated;
};

export const useProfiles = () => useQuery({ queryKey: ["profiles"], queryFn: getProfiles });
