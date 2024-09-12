import PanelTitle from "@/components/atoms/panel/PanelTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TicketPlus } from "lucide-react";
import Link from "next/link";

export default function History() {
  return (
    <>
      <section className="container">
        <div className="flex justify-between">
          <PanelTitle
            title="Transactions"
            description="The history or list of transactions data"
          />
          <Button asChild className="gap-2 items-center">
            <Link href="/panel/transactions/add">
              <TicketPlus size={18} /> Add New
            </Link>
          </Button>
        </div>
      </section>
      <section className="container mt-8">
        <div className="inline-flex gap-5">
          <Input type="date" className="max-w-max" value="2024-09-12" />
          <Input placeholder="Search name" className="w-96" />
        </div>
      </section>
      <section className="container mt-5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                Paundra Pujo Darmawan
              </TableCell>
              <TableCell>13 Januari 2024</TableCell>
              <TableCell>CASH</TableCell>
              <TableCell className="text-right">Rp15.000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Ardhi Putra Pradana</TableCell>
              <TableCell>15 Januari 2024</TableCell>
              <TableCell>SAWERIA</TableCell>
              <TableCell className="text-right">Rp15.000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Ahmad Idza Anafin</TableCell>
              <TableCell>20 Januari 2024</TableCell>
              <TableCell>SAWERIA</TableCell>
              <TableCell className="text-right">Rp15.000</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </>
  );
}
