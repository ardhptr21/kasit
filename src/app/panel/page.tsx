import PanelTitle from "@/components/atoms/panel/PanelTitle";
import AllTimeStatsPanel from "@/components/molecules/panel/AllTimeStatsPanel";
import MonthlyStatsPanel from "@/components/molecules/panel/MonthlyStatsPanel";
import { auth } from "@/lib/auth";

export default async function Panel() {
  const session = await auth();

  return (
    <>
      <section className="container">
        <PanelTitle
          title={`Welcome, ${session?.user.name}`}
          description="Take a look and let's explore the income and outcome for all spent money of Information Technology 2024"
        />
      </section>
      <section className="container mt-10 space-y-5">
        <AllTimeStatsPanel />
        <MonthlyStatsPanel />
      </section>
    </>
  );
}
