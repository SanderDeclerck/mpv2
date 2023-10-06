import { Router } from "@tanstack/react-router";
import { triggerOverviewRoute } from "../triggers/components/TriggerOverview/route";
import { aboutRoute } from "./components/About/route";
import { appRoute } from "./components/App/route";
import { homeRoute } from "./components/Home/route";

// Create the route tree using your routes
const routeTree = appRoute.addChildren([homeRoute, aboutRoute, triggerOverviewRoute]);

// Create the router using your route tree
export const router = new Router({ routeTree });

// Register your router for maximum type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
