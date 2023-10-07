import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "@tanstack/react-router";
import { SearchIcon, User2Icon } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/~button";
import { Menu } from "../Menu";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="sticky top-0 z-40 w-full border-b backdrop-blur bg-white/95">
        <div className="flex justify-between items-center">
          <div className="pl-10 py-3 font-extrabold text-2xl">
            <span className="bg-clip-text bg-peri-gradient text-transparent">
              MPV2
            </span>
          </div>
          <div className="pr-4">
            <Button variant="ghost" size="icon">
              <User2Icon className="h-5 w-5 stroke-foreground" />
            </Button>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-20 top-[3.8125rem] right-auto w-[19rem] overflow-y-auto pb-10 pl-8 pr-6">
        <div className="leading-6 text-sm relative">
          <div className="sticky top-0 -ml-2 pointer-events-none z-20">
            <div className="h-10 bg-white" />
            <div className="bg-white relative pointer-events-auto">
              <button
                type="button"
                className="w-full flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300"
              >
                <div className="mr-3 flex-none">
                  <SearchIcon className="p-1" />
                </div>
                Quick search...
              </button>
            </div>
            <div className="h-8 bg-gradient-to-b from-white"></div>
          </div>
          <Menu />
        </div>
      </div>

      <div className="pl-[19.5rem]">
        <main className="pt-8 px-4 lg:px-12 xl:px-16">
          <Outlet />
          <Toaster />
        </main>
      </div>
      <div className="bg-peri-gradient-transparent h-screen absolute top-0 left-[19.5rem] bottom-0 right-0 -z-10 overflow-hidden pointer-events-none"></div>
    </QueryClientProvider>
  );
}

export default App;
