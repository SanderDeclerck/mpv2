import { Outlet, useNavigate, useSearch } from "@tanstack/react-router";
import { aboutRoute } from "./route";
import { Input } from "@/components/ui/input";

export const About = () => {
  const search = useSearch({ from: aboutRoute.id });
  const navigate = useNavigate({ from: aboutRoute.id });

  return (
    <div>
      <h1>About</h1>
      <p>this is the About page</p>
      <Input
        value={search.filter}
        onChange={(e) => navigate({ search: { ...search, filter: e.target.value }, replace: true })}
      />
      <Outlet />
    </div>
  );
};
