"use client";

import * as React from "react";
import { MessageSquare, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { LogoDashboard } from "./logo-dashboard";

const chatHistory = [
  { id: "1", title: "จัดสเปคคอมพิวเตอร์...", isActive: true },
  { id: "2", title: "การเล่นเกม", isActive: false },
  { id: "3", title: "การทำงานกราฟิก", isActive: false },
  { id: "4", title: "การเรียนออนไลน์", isActive: false },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { open } = useSidebar();
  const isLoading = false;

  if (!open) return null;

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className={cn(open ? "h-16" : "h-12")}>
        <LogoDashboard open={open} />
      </SidebarHeader>

      {!isLoading ? (
        <>
          <SidebarContent className="p-2">
            {open && (
              <div className="mb-2 px-2 text-xs font-semibold uppercase text-muted-foreground tracking-wider">
                แชททั้งหมด
              </div>
            )}

            <div className="flex flex-col gap-y-1">
              {open &&
                chatHistory.map((chat) => (
                  <Button
                    key={chat.id}
                    variant="ghost"
                    className={cn(
                      "w-full justify-start h-9",
                      chat.isActive && "bg-muted text-foreground hover:bg-muted"
                    )}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        <span className="truncate text-sm">{chat.title}</span>
                      </div>
                      {!chat.isActive && (
                        <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                  </Button>
                ))}
            </div>
          </SidebarContent>
          <SidebarFooter className="px-4 mb-6">
            <Button className="bg-transparent hover:bg-transparent text-white !border-[0.1px] border-white hover:border-white w-full rounded-full h-9">
              เข้าสู่ระบบ
            </Button>
          </SidebarFooter>
        </>
      ) : (
        <SidebarSkeleton />
      )}
      <SidebarRail />
    </Sidebar>
  );
}

const SidebarSkeleton = () => {
  return (
    <div className="p-4 space-y-4">
      <Skeleton className="h-4 w-1/2" />
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex items-center gap-x-2">
          <Skeleton key={i} className="h-6 w-6" />
          <Skeleton key={i} className="h-4 w-full" />
        </div>
      ))}
    </div>
  );
};
