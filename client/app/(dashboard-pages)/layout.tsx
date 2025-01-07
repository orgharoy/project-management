import type { Metadata } from "next";
import { cookies } from "next/headers";
import { AppSidebar } from "@/components/nav-componenets/sidebar-components/app-sidebar";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/dark-mode-toggle";
import { MessageSquareText } from "lucide-react";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Project Management | Dashboard",
  description: "Manage your project",
};

export default async function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
    return;
  }

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <SidebarInset className={cn("bg-muted")}>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center w-full justify-between px-4 gap-2">
            <SidebarTrigger />
            <div className="flex items-center gap-2">
              <ModeToggle />
              <Button
                variant="ghost"
                className="gap-2 flex items-center px-3 h-9"
              >
                <MessageSquareText className="h-[1.3rem] w-[1.3rem]" />
                <span>Support</span>
              </Button>
            </div>
          </div>
        </header>
        <div className="mx-4 px-5 rounded-md py-4 mb-4 bg-background max-w-full min-h-[calc(100vh-100px)]">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
