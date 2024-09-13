"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toCurrency } from "@/lib/utils";
import { useListExpensesStrict } from "@/queries/expenses/list-expenses-strict";
import { useFilterExpenseStore } from "@/stores/expense/filter-expense-store";

export default function TableListExpense() {
  const monthly = useFilterExpenseStore((s) => s.monthly);

  const { data } = useListExpensesStrict({ monthly });

  return (
    <section className="container mt-5">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Purpose</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell>
                {new Date(expense.createdAt).toLocaleDateString("id-ID")}
              </TableCell>
              <TableCell>{expense.purpose}</TableCell>
              <TableCell className="text-right">
                {toCurrency(expense.amount)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
