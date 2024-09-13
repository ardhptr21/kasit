import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "KasIT - 2024",
};

export default async function Home() {
  const session = await auth();

  if (session) return redirect("/panel");

  return (
    <main className="h-screen flex justify-center items-center flex-col container">
      <div>
        <h1 className="font-bold text-3xl">KasIT 24</h1>
        <p className="max-w-xl">
          Kasnya anak IT 24 nii bozzz.... halaman depannya belom jadi bang
          maapkeun, ntar tak perbaikin lagi dehh yang penting bisa buat mantau
          kas dulu (ttd ardhi)
        </p>
        <Button asChild className="mt-5">
          <Link href="/api/auth/signin">Login Disini</Link>
        </Button>
      </div>
    </main>
  );
}
