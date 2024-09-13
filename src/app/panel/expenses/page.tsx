import PanelTitle from "@/components/atoms/panel/PanelTitle";
import FilterListExpense from "@/components/molecules/panel/expense/list/FilterListExpense";
import TableListExpense from "@/components/molecules/panel/expense/list/TableListExpense";
import NewExpenseModal from "@/components/molecules/panel/expense/NewExpenseModal";
import { auth } from "@/lib/auth";
import { UserRole } from "@prisma/client";

export default async function ExpensesPanelPage() {
  const session = await auth();
  return (
    <>
      <section className="container">
        <div className="flex justify-between flex-col gap-3 md:flex-row md:gap-0">
          <PanelTitle
            title="Expenses"
            description="The tracking of expenses used"
          />
          {session?.user.role === UserRole.ADMIN && <NewExpenseModal />}
        </div>
      </section>
      <FilterListExpense />
      <TableListExpense />
    </>
  );
}
