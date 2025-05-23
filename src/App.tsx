
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import InviteFriend from "./pages/InviteFriend";
import LoginSignup from "./pages/LoginSignup";
import ChooseDriver from "./pages/ChooseDriver";
import DriverProfile from "./pages/DriverProfile";
import ChooseLanguage from "./pages/ChooseLanguage";
import Is from "./pages/Is";
import Categories from "./pages/Categories";
import Employees from "./pages/Employees";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/invite" element={<InviteFriend />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/choose-language" element={<ChooseLanguage />} />
          <Route path="/choose-driver" element={<ChooseDriver />} />
          <Route path="/driver/:name" element={<DriverProfile />} />
          <Route path="/is" element={<Is />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
