import PanelTitle from "@/components/atoms/panel/PanelTitle";
import AllTimeStatsPanel from "@/components/molecules/panel/AllTimeStatsPanel";
import MonthlyStatsPanel from "@/components/molecules/panel/MonthlyStatsPanel";
import StatusStatsPanel from "@/components/molecules/panel/StatusStatsPanel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { auth } from "@/lib/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panel - KasIT 2024",
};

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Card>
            <CardHeader>
              <CardTitle>Saweria Link</CardTitle>
              <CardDescription>
                If you prefer to donate using Saweria, you can use the link below. You can confirm
                to the treasurer if you already pay using Saweria.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="https://saweria.co/it2024"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-yellow-500 hover:underline"
              >
                https://saweria.co/it2024
              </a>
            </CardContent>
          </Card>
          <StatusStatsPanel userId={session!.user.id} />
        </div>
        <AllTimeStatsPanel />
        <MonthlyStatsPanel />
      </section>
    </>
  );
}
