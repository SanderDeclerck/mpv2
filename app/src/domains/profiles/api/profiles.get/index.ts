import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { api } from "@/lib/createApi";

const Profile = z.object({
  id: z.number(),
  name: z.string(),
});

export const getProfiles = api.get("/profiles").returns(z.array(Profile));

export const useProfiles = () =>
  useQuery({
    queryKey: ["profiles"],
    queryFn: getProfiles,
  });
