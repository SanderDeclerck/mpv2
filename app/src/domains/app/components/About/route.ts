import { Route } from "@tanstack/react-router";
import { z } from "zod";
import { appRoute } from "../App/route";
import { About } from ".";

const productSearchSchema = z.object({
  page: z.number().catch(1).optional(),
  filter: z.string().catch("").optional(),
  sort: z.enum(["newest", "oldest", "price"]).catch("newest").optional(),
});

export const aboutRoute = new Route({
  getParentRoute: () => appRoute,
  path: "/about",
  component: About,
  validateSearch: productSearchSchema,
});
