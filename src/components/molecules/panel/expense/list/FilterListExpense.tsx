"use client";

import { Input } from "@/components/ui/input";
import { useFilterExpenseStore } from "@/stores/expense/filter-expense-store";
import { useDebouncedCallback } from "use-debounce";

export default function FilterListExpense() {
  const { monthly, setMonthly } = useFilterExpenseStore();

  return (
    <section className="container mt-8">
      <div className="inline-flex gap-5">
        <Input
          type="month"
          className="max-w-max"
          value={monthly}
          onChange={(e) => setMonthly(e.target.value)}
        />
      </div>
    </section>
  );
}
