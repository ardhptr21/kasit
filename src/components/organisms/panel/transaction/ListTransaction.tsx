import FilterListTransaction from "@/components/molecules/transaction/list/FilterListTransaction";
import TableListTransaction from "@/components/molecules/transaction/list/TableListTransaction";

export default function ListTransaction() {
  return (
    <>
      <FilterListTransaction />
      <TableListTransaction />
    </>
  );
}
