import { About } from ".";
import { Route } from "@tanstack/react-router";
import { rootRoute } from "../App/rootRoute";
import { Jobs } from "./Jobs";
import { Dev } from "./Jobs/Dev";
import { Sales } from "./Jobs/Sales";
import { z } from "zod";

const productSearchSchema = z.object({
  page: z.number().catch(1),
  filter: z.string().catch(""),
  sort: z.enum(["newest", "oldest", "price"]).catch("newest"),
});

export const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
  validateSearch: productSearchSchema,
});

export const jobsRoute = new Route({
  getParentRoute: () => aboutRoute,
  path: "/jobs",
  component: Jobs,
});

const devRoute = new Route({
  getParentRoute: () => jobsRoute,
  path: "dev",
  component: Dev,
});

const salesRoute = new Route({
  getParentRoute: () => jobsRoute,
  path: "sales",
  component: Sales,
});

export const jobsRouteTree = jobsRoute.addChildren([devRoute, salesRoute]);

export const aboutRouteTree = aboutRoute.addChildren([jobsRouteTree]);
