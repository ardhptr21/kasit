import PanelTitle from "@/components/atoms/panel/PanelTitle";
import AddNewTransaction from "@/components/organisms/panel/transaction/AddNewTransaction";

export default function AddTransaction() {
  return (
    <>
      <section className="container">
        <div className="text-center">
          <PanelTitle
            title="New Transaction"
            description="Add new student transaction data (only cash payment)"
          />
        </div>
      </section>
      <AddNewTransaction />
    </>
  );
}
