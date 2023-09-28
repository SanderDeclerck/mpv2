import { Toaster } from "./components/ui/toaster";
import { CreateVisitorPage } from "./domains/visitors/components/CreateVisitor";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="flex flex-row h-screen bg-primary p-12">
      <QueryClientProvider client={queryClient}>
        <CreateVisitorPage />
        <Toaster />
      </QueryClientProvider>
    </div>
  );
}

export default App;
