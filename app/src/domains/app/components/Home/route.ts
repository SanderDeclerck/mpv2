import { Route } from "@tanstack/react-router";
import { appRoute } from "../App/route";
import { Home } from ".";

export const homeRoute = new Route({
  getParentRoute: () => appRoute,
  path: "/",
  component: Home,
});
