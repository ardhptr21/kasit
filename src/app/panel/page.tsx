import StatsCard from "@/components/molecules/card/StatsCard";
import { Banknote, Coins, HandCoins } from "lucide-react";

export default function Panel() {
  return (
    <section className="container space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <StatsCard
          title="Income"
          value="Rp5.500.000"
          icon={Coins}
          subtext="All time income"
        />
        <StatsCard
          title="Expense"
          value="Rp500.000"
          icon={HandCoins}
          subtext="All time expense"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <StatsCard
          title="Monthly Income"
          value="Rp1.00.000"
          icon={Coins}
          subtext="January income"
        />
        <StatsCard
          title="Monthly Expense"
          value="Rp120.000"
          icon={HandCoins}
          subtext="February expense"
        />
        <StatsCard
          title="Total spent"
          value="13 / 119"
          icon={Banknote}
          subtext="Have already spent in february"
        />
      </div>
    </section>
  );
}
