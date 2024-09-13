"use client";

import { Input } from "@/components/ui/input";
import { useFilterExpenseStore } from "@/stores/expense/filter-expense-store";

export default function FilterListExpense() {
  const { monthly, setMonthly } = useFilterExpenseStore();

  return (
    <section className="container mt-8">
      <div className="flex gap-5">
        <Input
          type="month"
          className="w-full md:max-w-max"
          value={monthly}
          onChange={(e) => setMonthly(e.target.value)}
        />
      </div>
    </section>
  );
}
