import { faker } from "@faker-js/faker";
import { profiles } from "@/domains/profiles/api/profiles.get/mock";
import { registerMock } from "@/server/registerMock";
import {
  CreateAssignedProfileTrigger,
  CreateStatusChangeTrigger,
  CreateTrigger,
  Trigger,
} from "../../schemas";
import { triggerMocks } from "../triggers.get/mock";
import { postTrigger } from ".";

const parseCreateTrigger = (createTriggerData: CreateTrigger): Trigger => {
  if (createTriggerData.type === "StatusChange") {
    const statusTrigger =
      CreateStatusChangeTrigger.safeParse(createTriggerData);
    if (statusTrigger.success) {
      return {
        id: faker.string.uuid(),
        ...statusTrigger.data,
      };
    }
  } else if (createTriggerData.type === "AssignedProfile") {
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
  }

  // todo remove
  return {} as Trigger;
};

registerMock(postTrigger, async (req, res) => {
  const trigger = parseCreateTrigger(req.body);

  triggerMocks.push(trigger);

  setTimeout(() => {
    res.json(triggerMocks);
  }, 2000);
});
