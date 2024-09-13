import PanelTitle from "@/components/atoms/panel/PanelTitle";
import ListUsers from "@/components/organisms/panel/users/ListUsers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Students - KasIT 2024",
};

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
