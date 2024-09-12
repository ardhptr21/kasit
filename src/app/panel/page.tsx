import AllTimeStatsPanel from "@/components/molecules/panel/AllTimeStatsPanel";
import MonthlyStatsPanel from "@/components/molecules/panel/MonthlyStatsPanel";

export default function Panel() {
  return (
    <section className="container space-y-5">
      <AllTimeStatsPanel />
      <MonthlyStatsPanel />
    </section>
  );
}
