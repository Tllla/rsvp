'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>
    <DropdownMenu>
    <DropdownMenuContent>
    <DropdownMenuLabel>
    <DropdownMenuItem>
    {children}
    </DropdownMenuItem>
    </DropdownMenuLabel>
    </DropdownMenuContent>
    </DropdownMenu>
    {children}
    
    </NextThemesProvider>
}
