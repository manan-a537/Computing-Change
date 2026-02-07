import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import VideoPage from "./pages/VideoPage";
import Poster from "./pages/Poster";
import Infographic from "./pages/Infographic";
import PlacementJourney from "./pages/PlacementJourney";
import DigitalGame from "./pages/DigitalGame";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/poster" element={<Poster />} />
          <Route path="/infographic" element={<Infographic />} />
          <Route path="/placement-journey" element={<PlacementJourney />} />
          <Route path="/digital-game" element={<DigitalGame />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
