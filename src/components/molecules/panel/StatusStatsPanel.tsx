"use client";

import { cn } from "@/lib/utils";
import { useGetStatusTracker } from "@/queries/trackers/status-tracker";
import { LoaderPinwheel } from "lucide-react";
import StatsCard from "../card/StatsCard";
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";

interface StatusStatsPanelProps {
  userId: string;
}

export default function StatusStatsPanel({ userId }: StatusStatsPanelProps) {
  const [date, setDate] = useState<Date>(new Date());
  const monthName = useMemo(() => {
    return date.toLocaleString("default", { month: "long" });
  }, [date]);

  const { isLoading, data } = useGetStatusTracker({ userId, date: date.toISOString() });

  return (
    <div className="space-y-5">
      <Input
        type="month"
        className="max-w-max ml-auto"
        value={date.toISOString().split("T")[0].slice(0, 7)}
        onChange={(e) => {
          const newDate = new Date(e.target.value);
          setDate(newDate);
        }}
      />
      <StatsCard
        title="Status"
        value={data?.data.status && !isLoading ? "Paid" : "Unpaid"}
        subtext={
          data?.data.status
            ? `You have paid for ${monthName} month ${date.getFullYear()}`
            : `You have not paid for ${monthName} month ${date.getFullYear()}`
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
