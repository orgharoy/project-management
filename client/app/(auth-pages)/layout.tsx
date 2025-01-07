import Link from "next/link";
import type { Metadata } from "next";
import { ModeToggle } from "@/components/ui/dark-mode-toggle";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Project Management | Login & Signup",
  description: "Manage your project",
};

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/");
    return;
  }

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
