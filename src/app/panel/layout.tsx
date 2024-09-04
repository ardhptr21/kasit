import PanelBar from "@/components/molecules/navbar/PanelBar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export const dynamic = "force-dynamic";

export default async function PanelLayout({
  children,
}: Readonly<PropsWithChildren>) {
  const session = await auth();
  if (!session) return redirect("/");

  return (
    <>
      <PanelBar />
      <main className="min-h-[calc(100vh-4rem)] bg-muted/40 py-16">
        {children}
      </main>
    </>
  );
}
