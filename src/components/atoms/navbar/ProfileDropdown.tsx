"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

interface ProfileDropdownProps {
  session: Session | null;
}

export default function ProfileDropdown({ session }: ProfileDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex flex-col items-end">
          <h5 className="text-base">{session?.user.nrp}</h5>
          <small className="text-muted-foreground">{session?.user.name}</small>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <button onClick={() => signOut()} className="w-full">
            Logout
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
  return <div>ProfileDropdown</div>;
}
