"use client";

import { Input } from "@/components/ui/input";
import { useFilterTransactionStore } from "@/stores/transaction/filter-transaction-store";
import { useDebouncedCallback } from "use-debounce";

export default function FilterListTransaction() {
  const { search, monthly, setMonthly, setSearch } =
    useFilterTransactionStore();
  const debouncedSearch = useDebouncedCallback(setSearch, 1000);

  return (
    <section className="container mt-8">
      <div className="inline-flex gap-5">
        <Input
          type="month"
          className="max-w-max"
          value={monthly}
          onChange={(e) => setMonthly(e.target.value)}
        />
        <Input
          placeholder="Search name"
          className="w-96"
          onChange={(e) => debouncedSearch(e.target.value)}
        />
      </div>
    </section>
  );
}
