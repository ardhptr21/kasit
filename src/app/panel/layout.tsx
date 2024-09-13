import PanelBar from "@/components/molecules/navbar/PanelBar";
import { withAuth } from "@/middleware/component-middleware";
import { PropsWithChildren } from "react";

export const dynamic = "force-dynamic";

function PanelLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      <PanelBar />
      <main className="min-h-[calc(100vh-4rem)] bg-muted/40 py-16">
        {children}
      </main>
    </>
  );
}

export default withAuth(PanelLayout);
