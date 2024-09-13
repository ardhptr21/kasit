import PanelTitle from "@/components/atoms/panel/PanelTitle";
import AddNewTransaction from "@/components/organisms/panel/transaction/AddNewTransaction";
import { withAuth } from "@/middleware/component-middleware";

function AddTransaction() {
  return (
    <>
      <section className="container">
        <div className="text-center">
          <PanelTitle
            title="New Transaction"
            description="Add new student transaction data"
          />
        </div>
      </section>
      <AddNewTransaction />
    </>
  );
}

export default withAuth(AddTransaction);
