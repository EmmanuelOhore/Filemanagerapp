import { sideBarData, sideBarData2 } from "../constant/variableData";
import { Plus, ArrowUpFromLine, FolderOpen } from "lucide-react";
import logo from "../assets/logo.png";

const SideBar = () => {
  return (
    <aside className="outline min-h-screen w-60 p-4 py-6 flex flex-col  bg-[#272c34] text-white">
      <header>
        <img src={logo} alt="Logo" />
      </header>
      <section className="flex flex-col gap-4 mt-9 ">
        <h2 className="text-sm font-medium ">File Manager</h2>
        <nav className="ml-4">
          <ul className="flex flex-col gap-4">
            {sideBarData.map((item) => (
              <li className="flex gap-2 text-xs items-center" key={item.title}>
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <section className="flex flex-col gap-4 mt-9">
        <h2 className="text-sm font-medium">Shared files</h2>
        <nav className="ml-4">
          <ul className="flex flex-col gap-4">
            {sideBarData2.map((item) => (
              <li className="flex gap-2 text-xs items-center" key={item.title}>
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </nav>
        <button className=" text-[13px] flex  items-center gap-2 px-4 py-2 rounded-md text-white bg-[#3146ff] font-semibold">
          <Plus className="w-4.5 h-4.5" /> Create shared Folder
        </button>
      </section>

      <footer className="mt-auto">
        <section>
          <div className="flex justify-between text-[11px]">
            <p className="flex items-center gap-1">
              <FolderOpen className="w-4 h-4" /> Storage
            </p>{" "}
            <span>43%</span>
          </div>
          <div className=" w-full h-2 p-[1px] rounded-full overflow-hidden my-2 bg-[#3f4652]">
            <div className={`w-[43%]  bg-[#3146ff]   h-full `}></div>
          </div>
        </section>
        <button className=" text-[13px] flex  items-center gap-2 px-4 py-2 w-full justify-center rounded-md text-white bg-[#3146ff] font-semibold">
          <ArrowUpFromLine className="w-3.5 h-3.5" /> Upgrage Storage
        </button>
      </footer>
    </aside>
  );
};

export default SideBar;
