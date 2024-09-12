"use client";

import { toCurrency } from "@/lib/utils";
import { useGetAllTimeTrackers } from "@/queries/trackers/all-time-trackers";
import { Coins, HandCoins } from "lucide-react";
import StatsCard from "../card/StatsCard";

export default function AllTimeStatsPanel() {
  const { data, isLoading } = useGetAllTimeTrackers({});
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <StatsCard
        title="Income"
        value={toCurrency(data?.data.income)}
        icon={Coins}
        subtext="All time income"
        isLoading={isLoading}
      />
      <StatsCard
        title="Expense"
        value="Rp0"
        icon={HandCoins}
        subtext="All time expense"
        isLoading={isLoading}
      />
    </div>
  );
}
