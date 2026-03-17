import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Proposal from "./pages/Proposal";
import Index from "./pages/Index";
import Features from "./pages/Features";
import About from "./pages/About";
import Integrations from "./pages/Integrations";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import RequestDemo from "./pages/RequestDemo";
import Contact from "./pages/Contact";
import BrandGuidelines from "./pages/BrandGuidelines";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Proposal />} />
          <Route path="/home" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/request-demo" element={<RequestDemo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/brand-guidelines" element={<BrandGuidelines />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
