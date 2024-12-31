import React from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/dark-mode-toggle";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex items-center">
        <Link href="/login">Login</Link>
        <ModeToggle />
      </div>
      {children}
    </div>
  );
}
