import React from "react";
import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  value: number;
}

export default function ProgressBar({ value }: ProgressBarProps) {
  return <Progress value={value} className="web:w-[60%] mt-8" />;
}
