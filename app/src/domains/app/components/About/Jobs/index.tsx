import { Link, Outlet, useRouteContext, useRouter } from "@tanstack/react-router";
import { jobsRoute, jobsRouteTree } from "../route";

export const Jobs = () => {
  // get child routes
  const router = useRouter();

  const kids = jobsRouteTree.children!;

  return (
    <div>
      <h1>Jobs</h1>
      <p>this is the jobs page in about</p>

      <Outlet />
    </div>
  );
};
