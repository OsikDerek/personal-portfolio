import React from "react";
import { cn } from "@/lib/utils";

interface ProgressSkillProps {
  name: string;
  percentage: number;
  color?: string;
}

export function ProgressSkill({ name, percentage, color = "bg-secondary" }: ProgressSkillProps) {
  return (
    <div className="flex items-center">
      <div className="w-full bg-neutral-200 rounded-full h-2.5">
        <div 
          className={cn("h-2.5 rounded-full", color)} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="ml-3 min-w-[80px]">{name}</span>
    </div>
  );
}
