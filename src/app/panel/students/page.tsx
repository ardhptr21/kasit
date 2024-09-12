import PanelTitle from "@/components/atoms/panel/PanelTitle";
import ListUsers from "@/components/organisms/panel/users/ListUsers";

export default function StudentsPage() {
  return (
    <>
      <section className="container">
        <div className="flex justify-between">
          <PanelTitle
            title="Students"
            description="List of Information Technology students 2024"
          />
        </div>
      </section>
      <ListUsers />
    </>
  );
}
