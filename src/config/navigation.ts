import type { LucideIcon } from "lucide-react";
import { BookOpen, CalendarDays, Cog, Gamepad2, MonitorSmartphone, Users } from "lucide-react";

export type NavItem = {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Cog, isContentType: true },
  { key: "modes", path: "/modes", icon: Gamepad2, isContentType: true },
  { key: "platforms", path: "/platforms", icon: MonitorSmartphone, isContentType: true },
  { key: "release", path: "/release", icon: CalendarDays, isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
