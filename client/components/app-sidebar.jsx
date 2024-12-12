import * as React from "react"
import { LayoutDashboard, UsersRound, Zap, BellRing, ArrowRightLeft, Settings, Boxes } from 'lucide-react';

import { NavMain } from "@/components/nav-main"
import { SidebarOptInForm } from "@/components/sidebar-opt-in-form"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { logo } from "@/images"
import Image from "next/image"
import SidebarUpgrade from "./SidebarUpgrade";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/site/dashboard",
      icon: <LayoutDashboard/>,
      
    },
    {
      title: "Groups",
      url: "/site/dashboard/groups",
      icon: <Boxes/>,
    },
    {
      title: "Members",
      url: "/site/dashboard/members",
      icon: <UsersRound/>,
     
    },
    {
      title: "Launchpad",
      url: "/site/dashboard/launchpad",
      icon: <Zap/>,
    
    },
    {
      title: "Notifications",
      url: "/site/dashboard/notifications",
      icon: <BellRing/>,
     
    },{
      title: "Transaction History",
      url: "/site/dashboard/transaction-history",
      icon: <ArrowRightLeft/>
    },
    {
     title: "Settings",
     url: "/site/dashboard/settings",
     icon: <Settings/>
    }
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    (<Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div
                  className="flex aspect-square size-8 items-center justify-center rounded-lg bg-blue-500 text-sidebar-primary-foreground">
                  <Image src={logo} alt="GroupGuard" className="w-[40px] h-[40px]" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">GroupGuard</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <div className="p-1">
          {/* <SidebarOptInForm /> */}
          <SidebarUpgrade/>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>)
  );
}
