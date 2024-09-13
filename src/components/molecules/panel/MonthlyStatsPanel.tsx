"use client";

import { toCurrency } from "@/lib/utils";
import { useGetMonthlyTrackers } from "@/queries/trackers/monthly-trackers";
import { Coins, HandCoins, Rabbit, Users, Wallet } from "lucide-react";
import StatsCard from "../card/StatsCard";

export default function MonthlyStatsPanel() {
  const month = new Date().toISOString().split("T")[0].slice(0, 7);
  const monthName = new Date().toLocaleString("default", { month: "long" });
  const { data, isLoading } = useGetMonthlyTrackers({ monthly: month });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <StatsCard
        title="Monthly Income"
        value={toCurrency(data?.data.income.all)}
        icon={Coins}
        subtext={`${monthName} income`}
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
        title="Monthly Expense"
        value={toCurrency(data?.data.expense)}
        icon={HandCoins}
        subtext={`${monthName} expense`}
        isLoading={isLoading}
      />
      <StatsCard
        title="Total spent"
        value={`${data?.data.count} / 119`}
        icon={Users}
        subtext={`Students have already spent in ${monthName}`}
        isLoading={isLoading}
      />
    </div>
  );
}
