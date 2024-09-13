import NavLink from "@/components/atoms/navbar/NavLink";
import ProfileDropdown from "@/components/atoms/navbar/ProfileDropdown";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { auth } from "@/lib/auth";
import { Menu } from "lucide-react";

type PanelLink = {
  href: string;
  label: string;
};

const panelLinks: PanelLink[] = [
  {
    href: "/panel",
    label: "Dashboard",
  },
  {
    href: "/panel/transactions",
    label: "Transactions",
  },
  {
    href: "/panel/expenses",
    label: "Expenses",
  },
  {
    href: "/panel/students",
    label: "Students",
  },
];

export default async function PanelBar() {
  const session = await auth();
  return (
    <header className="sticky z-50 top-0 flex items-center w-full h-16 gap-4 border-b bg-background">
      <nav className="container hidden  md:flex justify-between">
        <div className="flex flex-row items-center font-medium gap-5 text-sm">
          {panelLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <ProfileDropdown session={session} />
      </nav>
      <div className="container flex justify-between items-center md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0">
              <Menu className="w-5 h-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-5 mt-16">
              {panelLinks.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <ProfileDropdown session={session} />
      </div>
    </header>
  );
}
