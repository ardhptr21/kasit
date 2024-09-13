import PanelTitle from "@/components/atoms/panel/PanelTitle";
import FilterListExpense from "@/components/molecules/panel/expense/list/FilterListExpense";
import TableListExpense from "@/components/molecules/panel/expense/list/TableListExpense";
import { Button } from "@/components/ui/button";
import { TicketPlus } from "lucide-react";
import Link from "next/link";

export default function ExpensesPanelPage() {
  return (
    <>
      <section className="container">
        <div className="flex justify-between">
          <PanelTitle
            title="Expenses"
            description="The tracking of expenses used"
          />
          <Button asChild className="gap-2 items-center">
            <Link href="/panel/transactions/add">
              <TicketPlus size={18} /> New Expense
            </Link>
          </Button>
        </div>
      </section>
      <FilterListExpense />
      <TableListExpense />
    </>
  );
}
