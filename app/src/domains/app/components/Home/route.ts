import { Home } from ".";
import { Route } from "@tanstack/react-router";
import { rootRoute } from "../App/rootRoute";

export const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
