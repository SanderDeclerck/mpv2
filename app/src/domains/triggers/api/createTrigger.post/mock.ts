import { faker } from "@faker-js/faker";
import { profiles } from "@/domains/profiles/api/profiles.get/mock";
import { registerMock } from "@/server/registerMock";
import {
  CreateAssignedProfileTrigger,
  CreateTrigger,
  Trigger,
} from "../../schemas";
import { triggerMocks } from "../triggers.get/mock";
import { postTrigger } from ".";

const parseCreateTrigger = (createTriggerData: CreateTrigger): Trigger => {
  const profileTrigger =
    CreateAssignedProfileTrigger.safeParse(createTriggerData);
  if (profileTrigger.success) {
    const profileIds = profileTrigger.data.profiles;
    return {
      id: faker.string.uuid(),
      ...profileTrigger.data,
      profiles:
        profileIds === "all"
          ? "all"
          : profiles.filter((_) => profileIds.includes(_.id)),
    };
  }
  // todo remove
  return {} as Trigger;
};

registerMock(postTrigger, async (req, res) => {
  const trigger = parseCreateTrigger(req.body);

  triggerMocks.push(trigger);

  setTimeout(() => {
    res.json(trigger);
  }, 2000);
});
