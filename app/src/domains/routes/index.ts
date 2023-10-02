import { Router } from "@tanstack/react-router";
import { aboutRoute } from "../app/components/About/route";
import { appRoute } from "../app/components/App/route";
import { homeRoute } from "../app/components/Home/route";

// Create the route tree using your routes
const routeTree = appRoute.addChildren([homeRoute, aboutRoute]);

// Create the router using your route tree
export const router = new Router({ routeTree });

// Register your router for maximum type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
