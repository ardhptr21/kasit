"use client";

import SearchNRPInput from "@/components/molecules/panel/transaction/add/SearchNRPInput";
import TransactionAddForm from "@/components/molecules/panel/transaction/add/TransactionAddForm";
import { User } from "@prisma/client";
import { useState } from "react";

export default function AddNewTransaction() {
  const [user, setUser] = useState<Omit<User, "password"> | null>(null);

  return (
    <>
      {user ? (
        <TransactionAddForm user={user} onAddCancel={() => setUser(null)} />
      ) : (
        <SearchNRPInput onFindNRP={(u) => setUser(u)} />
      )}
    </>
  );
}
