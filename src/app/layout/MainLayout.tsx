import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen">
    <SideBar />
    <main className="flex-1 p-4">
      <Outlet />
    </main>
  </div>
  );
};

export default MainLayout;
