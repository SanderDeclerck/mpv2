import { faker } from "@faker-js/faker";
import { registerMock } from "@/server/registerMock";
import { Trigger } from "../../schemas";
import { getTriggers } from ".";

const seed = 1231;
faker.seed(seed);
// const getSeed = () => seed++;

export const triggerMocks: Trigger[] = [];

// export const triggerMocks: Trigger[] = Array.from(Array(20)).map(() => {
//   const trigger = generateMock(Trigger, { seed: getSeed() });
//   if (trigger.type === "AssignedProfile") {
//     if (trigger.profiles !== "all") {
//       trigger.profiles = faker.helpers.arrayElements(profiles, {
//         min: 1,
//         max: 2,
//       });
//     }
//   }
//   if (trigger.type === "StatusChange") {
//     if (trigger.status !== "all") {
//       trigger.status = faker.helpers.arrayElements(visitorStatusMap, {
//         min: 1,
//         max: 3,
//       });
//     }
//   }

//   trigger.actions = faker.helpers.arrayElements(actionTypeMap, {
//     min: 1,
//     max: 2,
//   });

//   return trigger;
// });

registerMock(getTriggers, async (_req, res) => {
  setTimeout(() => {
    res.json(triggerMocks);
  }, 500);
});
