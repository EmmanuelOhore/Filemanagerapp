import { LayoutGrid } from "lucide-react";
const Dashboard = () => {
  return (
    <main>
      <header>
        <section className="bg-[#272c34] p-4 text-white rounded-md">
          <h2 className="flex items-center  gap-1 text-base ">
            <LayoutGrid className="w-4 h-4" />
            -Overview
          </h2>
        </section>
        <section>
          <article></article>
        </section>
      </header>
    </main>
  );
};

export default Dashboard;
