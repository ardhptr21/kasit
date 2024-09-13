import PanelTitle from "@/components/atoms/panel/PanelTitle";
import ListTransaction from "@/components/organisms/panel/transaction/ListTransaction";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { UserRole } from "@prisma/client";
import { TicketPlus } from "lucide-react";
import Link from "next/link";

export default async function TransactionsPanelPage() {
  const session = await auth();

  return (
    <>
      <section className="container">
        <div className="flex justify-between flex-col gap-3 md:flex-row md:gap-0">
          <PanelTitle
            title="Transactions"
            description="The history or list of transactions data"
          />
          {session?.user.role === UserRole.ADMIN && (
            <Button asChild className="gap-2 items-center">
              <Link href="/panel/transactions/add">
                <TicketPlus size={18} /> New Transaction
              </Link>
            </Button>
          )}
        </div>
      </section>
      <ListTransaction />
    </>
  );
}
