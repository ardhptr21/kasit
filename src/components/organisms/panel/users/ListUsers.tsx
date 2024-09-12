"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useListUsers } from "@/queries/users/list-users";

export default function ListUsers() {
  const { data } = useListUsers();
  return (
    <section className="container mt-5">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>NRP</TableHead>
            <TableHead>Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data.map((user, idx) => (
            <TableRow>
              <TableCell>{idx + 1}</TableCell>
              <TableCell>{user.nrp}</TableCell>
              <TableCell>{user.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
