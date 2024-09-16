"use client";

import { cn } from "@/lib/utils";
import { useGetStatusTracker } from "@/queries/trackers/status-tracker";
import { LoaderPinwheel } from "lucide-react";
import StatsCard from "../card/StatsCard";

interface StatusStatsPanelProps {
  userId: string;
}

export default function StatusStatsPanel({ userId }: StatusStatsPanelProps) {
  const monthName = new Date().toLocaleString("default", { month: "long" });

  const { isLoading, data } = useGetStatusTracker({ userId });

  return (
    <div>
      <StatsCard
        title="Status"
        value={data?.data.status && !isLoading ? "Paid" : "Unpaid"}
        subtext={
          data?.data.status
            ? `You have paid for ${monthName} month`
            : `You have not paid for ${monthName} month`
        }
        icon={LoaderPinwheel}
        className={cn({
          "bg-green-50 text-green-500": data?.data.status,
          "bg-red-50 text-red-500": !data?.data.status && !isLoading,
        })}
        isLoading={isLoading}
      />
    </div>
  );
}
