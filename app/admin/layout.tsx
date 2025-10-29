import { ReactNode } from "react";
import Link from "next/link";
import AppTheme from "../component/AppTheme";

const navItems = [
  { name: "Dashboard", href: "/admin/dasboard" },
  { name: "Data", href: "/admin/data" },
  { name: "Users", href: "/admin/users" },
  { name: "Setting", href: "/admin/setting" },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <AppTheme title="APLIKASIKU">
      <div className="flex min-h-screen">
     
        <aside className="w-56 bg-gray-100 p-6 border-r border-gray-200">

           <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b border-black pb-2">
            Navigation
          </h2>
          <nav className="flex flex-col gap-10">
            {navItems.map((item) => (
             <Link
  key={item.href}
  href={item.href}
  className="text-gray-700 text-2xl font-medium px-3 py-2 rounded hover:bg-red-600 hover:text-white transition-colors"
>
  {item.name}
</Link>

            ))}
          </nav>
        </aside>

     
        <main className="flex-1 p-10 bg-white">
          {children}
        </main>
      </div>
    </AppTheme>
  );
}
