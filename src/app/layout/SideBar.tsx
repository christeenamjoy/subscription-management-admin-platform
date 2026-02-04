// I avoid absolute positioning for core layout elements and rely on flex layouts
// so components remain responsive and composable

import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "./navigation";
import { useAuthStore, type Role } from "../../store/auth.store";
import { useUIStore } from "../../store/ui.store";

const SideBar = () => {
    const role = useAuthStore((s)=>s.role)
    const toggleTheme = useUIStore((s) => s.toggleTheme);

  return (
    <aside className="w-80 shrink-0 border-r bg-midnight dark:bg-slate-950 text-slate-950 dark:text-slate-50">
        
      <div className="h-full flex flex-col">
        <div className="px-6 py-4 font-semibold text-lg">SaaS Admin</div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-2">
          {NAV_ITEMS.filter(item => item.roles?.includes(role as Role)).map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"} // end means exact match only , / will be active only on / , /users and /subscriptions will never match correctly when nested
              className={({ isActive }:{isActive:boolean}) =>
                `block rounded px-3 py-2 text-sm transition 
               ${isActive ? "bg-gray-200 font-medium" : "hover:bg-gray-50"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
  onClick={toggleTheme}
  className="mt-4 rounded border px-3 py-2 text-sm"
>
  Toggle theme
</button>

        {/* Footer (future: user info / logout) */}
        <div className="px-4 py-3 border-t text-sm text-muted-foreground">
          © 2026
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
