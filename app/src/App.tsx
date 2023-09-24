import { CreateVisitorPage } from "./domains/visitors/create";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  // Create a client
  const queryClient = new QueryClient();

  return (
    <div className="flex flex-row h-screen bg-foreground  p-12">
      <QueryClientProvider client={queryClient}>
        <CreateVisitorPage />
      </QueryClientProvider>
    </div>
  );
}

export default App;
