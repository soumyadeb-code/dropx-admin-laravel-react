"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSidebarOpen, toggleCollapse } from "@/store/slices/sidebar-slice";
import { cn } from "@/lib/utils";
import {
  Bell,
  Maximize2,
  Menu,
  Moon,
  PanelLeftClose,
  PanelLeftOpen,
  Search,
  Sun,
} from "lucide-react";
import { UserMenu } from "./user-menu";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

export function Header() {
  const dispatch = useAppDispatch();
  const { isCollapsed } = useAppSelector((state) => state.sidebar);
  const { resolvedTheme, setTheme } = useTheme();
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const actionButton =
    "flex h-9 w-9 items-center justify-center rounded-lg border border-border/80 bg-background text-muted-foreground shadow-card transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary";

  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-card/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-card/85 lg:px-5">
      <div className="flex h-[68px] items-center gap-3">
        <button
          onClick={() => dispatch(setSidebarOpen(true))}
          className={cn(actionButton, "lg:hidden")}
          aria-label="Open sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>

        <button
          onClick={() => dispatch(toggleCollapse())}
          className={cn(actionButton, "hidden lg:flex")}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? (
            <PanelLeftOpen className="h-4 w-4" />
          ) : (
            <PanelLeftClose className="h-4 w-4" />
          )}
        </button>

        {/* Search */}
        <div className="flex-1">
          <div className="group relative w-full max-w-xl">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors group-hover:text-primary group-focus-within:text-primary" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search dashboards, apps, components..."
              className="h-10 w-full rounded-xl border border-border/80 bg-background pl-10 pr-4 text-sm text-foreground shadow-card transition-all placeholder:text-muted-foreground hover:border-primary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 sm:pr-20"
              onKeyDown={(e) => {
                if (e.key === "Escape") {
                  searchInputRef.current?.blur();
                }
              }}
            />
            <div className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 items-center sm:flex">
              <kbd className="rounded-md border border-border bg-muted px-1.5 py-0.5 text-2xs font-semibold text-muted-foreground shadow-sm">
                Ctrl K
              </kbd>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              if (!document.fullscreenElement) document.documentElement.requestFullscreen();
              else document.exitFullscreen();
            }}
            className={cn(actionButton, "hidden md:flex")}
            aria-label="Toggle fullscreen"
          >
            <Maximize2 className="h-4 w-4" />
          </button>

          {/* Both icons render on the server; CSS picks one so markup matches on hydration */}
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className={actionButton}
            aria-label="Toggle theme"
          >
            <Sun className="hidden h-4 w-4 dark:block" />
            <Moon className="h-4 w-4 dark:hidden" />
          </button>

          <button className={cn(actionButton, "relative")} aria-label="Notifications">
            <Bell className="h-4 w-4" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-card bg-destructive" />
          </button>

          <UserMenu />
        </div>
      </div>
    </header>
  );
}
