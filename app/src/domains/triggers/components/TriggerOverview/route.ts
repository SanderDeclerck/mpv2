import { Route } from "@tanstack/react-router";
import { appRoute } from "@/domains/app/components/App/route";
import { TriggerOverview } from ".";

export const triggersRoute = new Route({
  getParentRoute: () => appRoute,
  path: "/triggers",
});

export const triggerOverviewRoute = new Route({
  getParentRoute: () => triggersRoute,
  path: "/",
  component: TriggerOverview,
});
