
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import CustomCursor from "./components/CustomCursor";
import { playClickSound } from "./lib/click-sound";
import { initBackgroundMusic } from "./lib/background-music";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    initBackgroundMusic();

    // Listens on window so React handlers run first: the mute button's own click obeys its new state.
    window.addEventListener("click", playClickSound);
    return () => window.removeEventListener("click", playClickSound);
  }, []);

  return (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <CustomCursor />
        <Toaster />
        <Sonner />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            {/* Redirect these routes to the main page with the correct section */}
            <Route path="/about" element={<Index />} />
            <Route path="/experience" element={<Index />} />
            <Route path="/contact" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
  );
};

export default App;
