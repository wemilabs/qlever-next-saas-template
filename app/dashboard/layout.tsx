import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Dashboard - Qlever.next",
  description: "Manage everything right here.",
  keywords: ["qlever.next", "dashboard", "full management"],
};

export default async function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="hidden md:block">
          <div className="fixed top-14 z-30 w-[220px] lg:w-[240px] h-[calc(100vh-3.5rem)] overflow-y-auto">
            <div>Aside Navigation</div>
          </div>
        </aside>
        <main className="flex flex-col overflow-hidden">
          <div>Content {children}</div>
        </main>
      </div>
    </div>
  );
}
