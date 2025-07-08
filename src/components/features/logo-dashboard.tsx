"use client"

import * as React from "react"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useTheme } from "next-themes"

export function LogoDashboard({ open }: { open: boolean }) {
  const { theme } = useTheme();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" className="flex items-center justify-between hover:bg-transparent active:bg-transparent">
          <Link href="/" className={cn(
            "flex items-center justify-center rounded-lg overflow-hidden",
            open ? 'size-11 min-w-11' : 'size-8 min-w-8',
          )}>
            {open ? (
              <Image alt="logo" src={theme === "dark" ? "/images/logo.png" : "/images/jibbaba-b.png"} width={35} height={35} />
            ) : (
              <Image alt="logo" src={theme === "dark" ? "/images/logo.png" : "/images/jibbaba-b.png"} width={35} height={35} />
            )}
          </Link>

          <Link href="/">
            <Image
              alt="new chat"
              src="/images/new-chat.png"
              width={34}
              height={34}
            />
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
