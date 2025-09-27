import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  UserCheck,
  ClipboardCheck,
  Gift,
  FileBarChart,
  GraduationCap,
  ChevronLeft,
  Bell,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Students",
    url: "/students",
    icon: Users,
  },
  {
    title: "Mentors",
    url: "/mentors",
    icon: UserCheck,
  },
  {
    title: "Quizzes",
    url: "/quizzes",
    icon: ClipboardCheck,
  },
  {
    title: "Rewards",
    url: "/rewards",
    icon: Gift,
  },
  {
    title: "Reports",
    url: "/reports",
    icon: FileBarChart,
  },
];

export function AppSidebar() {
  const { open, setOpen } = useSidebar();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <Sidebar className={cn("border-r border-border/50 transition-all duration-300", !open ? "w-16" : "w-64")}>
      <SidebarHeader className="p-4 border-b border-border/50">
        <div className="flex items-center justify-between">
          <div className={cn("flex items-center space-x-2", !open && "justify-center")}>
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            {open && (
              <div>
                <h1 className="text-lg font-bold text-foreground">EduLink</h1>
                <p className="text-sm text-muted-foreground">Education Platform</p>
              </div>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!open)}
            className={cn("h-8 w-8", !open && "hidden")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupLabel className={cn("px-2", !open && "sr-only")}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive: navIsActive }) =>
                        cn(
                          "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200",
                          "hover:bg-accent/50 hover:text-accent-foreground",
                          navIsActive || isActive(item.url)
                            ? "bg-primary text-primary-foreground shadow-sm font-medium"
                            : "text-muted-foreground hover:text-foreground",
                          !open && "justify-center"
                        )
                      }
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {open && <span className="truncate">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}