"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { RiSunLine, RiMoonLine, RiComputerLine } from "@remixicon/react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              className="group/menu-button font-medium gap-3 h-9 rounded-md [&>svg]:size-auto"
              tooltip="Toggle theme"
            >
              <RiSunLine 
                className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-sidebar-foreground/50" 
                size={22}
              />
              <RiMoonLine 
                className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-sidebar-foreground/50" 
                size={22}
              />
              <span>Theme</span>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-[8rem]">
            <DropdownMenuItem onClick={() => setTheme("light")} className="gap-2">
              <RiSunLine className="h-4 w-4" />
              <span>Light</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")} className="gap-2">
              <RiMoonLine className="h-4 w-4" />
              <span>Dark</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")} className="gap-2">
              <RiComputerLine className="h-4 w-4" />
              <span>System</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}