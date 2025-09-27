import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import Students from "@/pages/Students";
import Mentors from "@/pages/Mentors";
import Quizzes from "@/pages/Quizzes";
import Rewards from "@/pages/Rewards";
import Reports from "@/pages/Reports";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Login Route */}
            <Route path="/login" element={<Login />} />
            
            {/* Dashboard Routes with Layout */}
            <Route path="/dashboard" element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            } />
            <Route path="/students" element={
              <DashboardLayout>
                <Students />
              </DashboardLayout>
            } />
            <Route path="/mentors" element={
              <DashboardLayout>
                <Mentors />
              </DashboardLayout>
            } />
            <Route path="/quizzes" element={
              <DashboardLayout>
                <Quizzes />
              </DashboardLayout>
            } />
            <Route path="/rewards" element={
              <DashboardLayout>
                <Rewards />
              </DashboardLayout>
            } />
            <Route path="/reports" element={
              <DashboardLayout>
                <Reports />
              </DashboardLayout>
            } />

            {/* Root Route - Redirect to Login */}
            <Route path="/" element={<Navigate to="/login" replace />} />
            
            {/* Catch All Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
