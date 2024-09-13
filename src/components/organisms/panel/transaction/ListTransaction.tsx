import FilterListTransaction from "@/components/molecules/panel/transaction/list/FilterListTransaction";
import TableListTransaction from "@/components/molecules/panel/transaction/list/TableListTransaction";

export default function ListTransaction() {
  return (
    <>
      <FilterListTransaction />
      <TableListTransaction />
    </>
  );
}
