import { LucideIcon, TrendingUp, Edit } from "lucide-react";

export interface StatItem {
  icon: LucideIcon;
  title: string;
  value: number;
  color: string;
}

export type Status = "published" | "draft";

export const StatusColor: Record<Status, string> = {
  published:
    "border-green-600 text-green-600 bg-green-50 dark:bg-green-950/30 dark:border-green-500",
  draft:
    "border-amber-500 text-amber-600 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-400",
};

export const StatusIcon: Record<Status, LucideIcon> = {
  published: TrendingUp,
  draft: Edit,
};
