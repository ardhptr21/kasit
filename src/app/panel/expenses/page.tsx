import PanelTitle from "@/components/atoms/panel/PanelTitle";
import FilterListExpense from "@/components/molecules/panel/expense/list/FilterListExpense";
import TableListExpense from "@/components/molecules/panel/expense/list/TableListExpense";
import NewExpenseModal from "@/components/molecules/panel/expense/NewExpenseModal";
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
          <NewExpenseModal />
        </div>
      </section>
      <FilterListExpense />
      <TableListExpense />
    </>
  );
}
