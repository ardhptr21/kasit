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
      <div className="flex flex-col md:flex-row gap-5">
        <Input
          type="month"
          className="w-full md:max-w-max"
          value={monthly}
          onChange={(e) => setMonthly(e.target.value)}
        />
        <Input
          placeholder="Search name"
          className="max-w-96"
          onChange={(e) => debouncedSearch(e.target.value)}
        />
      </div>
    </section>
  );
}
