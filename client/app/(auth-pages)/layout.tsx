import Link from "next/link";
import type { Metadata } from "next";
import { ModeToggle } from "@/components/ui/dark-mode-toggle";

export const metadata: Metadata = {
  title: "Project Management",
  description: "Manage your project",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative min-h-screen flex flex-col bg-[radial-gradient(circle,_#C0C0C0_1px,_transparent_1px)] dark:bg-[radial-gradient(circle,_#808080_1px,_transparent_1px)] bg-[size:20px_20px] px-5">
      <nav className="h-16 flex items-center justify-between w-full container mx-auto">
        <Link href="/">Home</Link>
        <ModeToggle />
      </nav>
      <div className="flex-grow container mx-auto flex items-center justify-center mb-20 mt-10">
        {children}
      </div>
    </main>
  );
}
