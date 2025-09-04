import { Outlet } from "react-router-dom";
import SideBar from "./sideBar";
import TopHeader from "./topBar";

const MainLayout = () => {
  return (
    <main className="flex ">
      <section>
        <SideBar />
      </section>
      <section className="flex flex-col bg-[#181a1f] flex-1">
        <TopHeader />
        <Outlet />
      </section>
    </main>
  );
};

export default MainLayout;
