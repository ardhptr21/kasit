"use client";

import SearchNRPInput from "@/components/molecules/transaction/add/SearchNRPInput";
import TransactionAddForm from "@/components/molecules/transaction/add/TransactionAddForm";
import { useState } from "react";

export default function AddNewTransaction() {
  const [nrp, setNrp] = useState<string | null>(null);

  return (
    <>
      {nrp ? (
        <TransactionAddForm onAddCancel={() => setNrp(null)} />
      ) : (
        <SearchNRPInput onFindNRP={(nrp) => setNrp(nrp)} />
      )}
    </>
  );
}
