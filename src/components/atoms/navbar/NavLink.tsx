"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

export default function NavLink({
  className,
  ...props
}: ComponentProps<typeof Link>) {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      className={cn(
        "transition-colors text-muted-foreground p-1 px-3 hover:text-foreground",
        pathname === props.href && "text-foreground bg-muted rounded-lg",
        className
      )}
    />
  );
}
