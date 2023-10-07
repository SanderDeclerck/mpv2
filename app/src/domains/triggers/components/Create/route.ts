import { Route } from "@tanstack/react-router";
import { triggersRoute } from "../TriggerOverview/route";
import { TriggerCreate } from ".";

export const triggerCreateRoute = new Route({
  getParentRoute: () => triggersRoute,
  path: "/create",
  component: TriggerCreate,
});
