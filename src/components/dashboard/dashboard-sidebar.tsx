"use client";
import Logo from "@/assets/svg/Logo";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { adminRoutes, doctorRoutes, patientRoutes } from "@/routes";
import { UserRole } from "@/types";
import { SideBarItems } from "@/types/sidebar.type";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarRoutes: Partial<Record<UserRole, SideBarItems>> = {
  ADMIN: adminRoutes,
  DOCTOR: doctorRoutes,
  PATIENT: patientRoutes,
  SUPER_ADMIN: adminRoutes,
};

export function DashboardSidebar({ role }: { role: UserRole }) {
  const routes: SideBarItems = sidebarRoutes[role] || [];
  const pathname = usePathname();
  console.log("pathname", pathname);
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Logo />
          <span> PH Healthcare</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {routes.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      render={<Link href={item.url} />}
                      isActive={pathname === item.url}
                    >
                      {item.title}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
