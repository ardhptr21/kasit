import NavLink from "@/components/atoms/navbar/NavLink";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
    href: "/panel/history",
    label: "History",
  },
];

export default function PanelBar() {
  return (
    <header className="sticky top-0 flex items-center w-full h-16 gap-4 border-b bg-background">
      <nav className="container hidden text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm">
        {panelLinks.map((link) => (
          <NavLink key={link.href} href={link.href}>
            {link.label}
          </NavLink>
        ))}
      </nav>
      <div className="container md:hidden">
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
      </div>
    </header>
  );
}
