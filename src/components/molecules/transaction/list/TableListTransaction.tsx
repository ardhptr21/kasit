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
import { useListTransactionsStrict } from "@/queries/transactions/list-transactions-strict";
import { useFilterTransactionStore } from "@/stores/transaction/filter-transaction-store";

export default function TableListTransaction() {
  const [monthly, search] = useFilterTransactionStore((s) => [
    s.monthly,
    s.search,
  ]);

  const { data } = useListTransactionsStrict({
    monthly,
    q: search,
  });

  return (
    <section className="container mt-5">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>NRP</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data.map((transaction) => (
            <TableRow>
              <TableCell className="font-medium">
                {transaction.user.name}
              </TableCell>
              <TableCell>{transaction.user.nrp}</TableCell>
              <TableCell>
                {new Date(transaction.createdAt).toLocaleDateString("id-ID")}
              </TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell className="text-right">
                {toCurrency(transaction.amount)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
