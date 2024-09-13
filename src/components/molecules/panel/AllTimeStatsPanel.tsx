"use client";

import { toCurrency } from "@/lib/utils";
import { useGetAllTimeTrackers } from "@/queries/trackers/all-time-trackers";
import { Coins, HandCoins, Rabbit, Wallet } from "lucide-react";
import StatsCard from "../card/StatsCard";

export default function AllTimeStatsPanel() {
  const { data, isLoading } = useGetAllTimeTrackers({});
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <StatsCard
        title="Income"
        value={toCurrency(data?.data.income.all)}
        icon={Coins}
        subtext="All time income"
        isLoading={isLoading}
      >
        <div className="flex gap-5">
          <p className="flex items-center gap-2 text-sm">
            <Rabbit size={20} />
            {toCurrency(data?.data.income.saweria)}
          </p>
          <p className="flex items-center gap-2 text-sm">
            <Wallet size={20} />
            {toCurrency(data?.data.income.cash)}
          </p>
        </div>
      </StatsCard>
      <StatsCard
        title="Expense"
        value={toCurrency(data?.data.expense)}
        icon={HandCoins}
        subtext="All time expense"
        isLoading={isLoading}
      />
    </div>
  );
}
