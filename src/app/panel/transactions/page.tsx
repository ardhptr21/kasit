import PanelTitle from "@/components/atoms/panel/PanelTitle";
import ListTransaction from "@/components/organisms/panel/transaction/ListTransaction";
import { Button } from "@/components/ui/button";
import { TicketPlus } from "lucide-react";
import Link from "next/link";

export default function History() {
  return (
    <>
      <section className="container">
        <div className="flex justify-between">
          <PanelTitle
            title="Transactions"
            description="The history or list of transactions data"
          />
          <Button asChild className="gap-2 items-center">
            <Link href="/panel/transactions/add">
              <TicketPlus size={18} /> Add New
            </Link>
          </Button>
        </div>
      </section>
      <ListTransaction />
    </>
  );
}
