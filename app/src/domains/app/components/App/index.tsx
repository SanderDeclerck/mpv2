import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Link, Outlet } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/toaster";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col h-full bg-primary p-12">
        <div>
          <Link to="/">Home</Link> <Link to="/about">About</Link>
        </div>
        <h1>Outlet time</h1>
        <Outlet />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
