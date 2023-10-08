import { generateMock } from "@anatine/zod-mock";
import { faker } from "@faker-js/faker";
import { profiles } from "@/domains/profiles/api/profiles.get/mock";
import { registerMock } from "@/server/registerMock";
import { Trigger, actionTypeMap, visitorStatusMap } from "../../schemas";
import { getTriggers } from ".";

let seed = 123;
faker.seed(seed);
const getSeed = () => seed++;

const mockData = Array.from(Array(20)).map(() => {
  const trigger = generateMock(Trigger, { seed: getSeed() });
  if (trigger.type === "AssignedProfile") {
    if (trigger.profiles !== "all") {
      trigger.profiles = faker.helpers
        .arrayElements(profiles, { min: 1, max: 5 })
        .map((_) => profiles.indexOf(_));
    }
  }
  if (trigger.type === "StatusChange") {
    if (trigger.status !== "all") {
      trigger.status = faker.helpers.arrayElements(visitorStatusMap, {
        min: 1,
        max: 3,
      });
    }
  }

  trigger.actions = faker.helpers.arrayElements(actionTypeMap, {
    min: 1,
    max: 2,
  });

  return trigger;
});

registerMock(getTriggers, async (_req, res) => {
  setTimeout(() => {
    res.json(mockData);
  }, 500);
});
