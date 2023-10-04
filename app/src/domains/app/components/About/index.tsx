import { Outlet, useNavigate, useSearch } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { aboutRoute } from "./route";

export const About = () => {
  const search = useSearch({ from: aboutRoute.id });
  const navigate = useNavigate({ from: aboutRoute.id });

  return (
    <div>
      <h1>About</h1>
      <p>this is the About page</p>
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(search, null, 2)}</code>
      </pre>
      <Input
        value={search?.filter || ""}
        onChange={(e) => navigate({ search: { ...search, filter: e.target.value }, replace: true })}
      />
      <h1>About</h1>
      <p>this is the About page</p>
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(search, null, 2)}</code>
      </pre>
      <Input
        value={search?.filter || ""}
        onChange={(e) => navigate({ search: { ...search, filter: e.target.value }, replace: true })}
      />
      <h1>About</h1>
      <p>this is the About page</p>
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(search, null, 2)}</code>
      </pre>
      <Input
        value={search?.filter || ""}
        onChange={(e) => navigate({ search: { ...search, filter: e.target.value }, replace: true })}
      />
      <h1>About</h1>
      <p>this is the About page</p>
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(search, null, 2)}</code>
      </pre>
      <Input
        value={search?.filter || ""}
        onChange={(e) => navigate({ search: { ...search, filter: e.target.value }, replace: true })}
      />
      <h1>About</h1>
      <p>this is the About page</p>
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(search, null, 2)}</code>
      </pre>
      <Input
        value={search?.filter || ""}
        onChange={(e) => navigate({ search: { ...search, filter: e.target.value }, replace: true })}
      />
      <h1>About</h1>
      <p>this is the About page</p>
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(search, null, 2)}</code>
      </pre>
      <Input
        value={search?.filter || ""}
        onChange={(e) => navigate({ search: { ...search, filter: e.target.value }, replace: true })}
      />
      <h1>About</h1>
      <p>this is the About page</p>
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(search, null, 2)}</code>
      </pre>
      <Input
        value={search?.filter || ""}
        onChange={(e) => navigate({ search: { ...search, filter: e.target.value }, replace: true })}
      />
      <h1>About</h1>
      <p>this is the About page</p>
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(search, null, 2)}</code>
      </pre>
      <Input
        value={search?.filter || ""}
        onChange={(e) => navigate({ search: { ...search, filter: e.target.value }, replace: true })}
      />
      <h1>About</h1>
      <p>this is the About page</p>
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(search, null, 2)}</code>
      </pre>
      <Input
        value={search?.filter || ""}
        onChange={(e) => navigate({ search: { ...search, filter: e.target.value }, replace: true })}
      />
      <h1>About</h1>
      <p>this is the About page</p>
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(search, null, 2)}</code>
      </pre>
      <Input
        value={search?.filter || ""}
        onChange={(e) => navigate({ search: { ...search, filter: e.target.value }, replace: true })}
      />
      <h1>About</h1>
      <p>this is the About page</p>
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(search, null, 2)}</code>
      </pre>
      <Input
        value={search?.filter || ""}
        onChange={(e) => navigate({ search: { ...search, filter: e.target.value }, replace: true })}
      />
      <Outlet />
    </div>
  );
};
