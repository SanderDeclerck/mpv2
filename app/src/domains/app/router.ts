import { Router } from "@tanstack/react-router";
import { triggerCreateRoute } from "../triggers/components/Create/route";
import {
  triggerOverviewRoute,
  triggersRoute,
} from "../triggers/components/TriggerOverview/route";
import { aboutRoute } from "./components/About/route";
import { appRoute } from "./components/App/route";
import { homeRoute } from "./components/Home/route";

// Create the route tree using your routes
const routeTree = appRoute.addChildren([
  homeRoute,
  aboutRoute,
  triggersRoute.addChildren([triggerOverviewRoute, triggerCreateRoute]),
]);

// Create the router using your route tree
export const router = new Router({ routeTree });

// Register your router for maximum type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
