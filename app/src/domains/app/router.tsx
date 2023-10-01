import { Router } from "@tanstack/react-router";

import { rootRoute } from "./components/App/rootRoute";
import { aboutRouteTree } from "./components/About/route";
import { homeRoute } from "./components/Home/route";

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([homeRoute, aboutRouteTree]);

// Create the router using your route tree
export const router = new Router({ routeTree });

// Register your router for maximum type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
