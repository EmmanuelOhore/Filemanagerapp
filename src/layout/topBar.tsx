import {
  Settings2,
  Search,
  Settings,
  CircleQuestionMark,
  Bell,
} from "lucide-react";
const TopHeader = () => {
  return (
    <header className="border-b border-b-gray-700 p-6 flex justify-between items-center">
      <section className="outline flex gap-2 items-center p-4 py-2 bg-[#272c34] rounded-md">
        <Search className="w-4 h-4 text-white" />
        <input type="text" className="bg-transparent w-80  " />
        <Settings2 className="w-4 h-4 text-white" />
      </section>
      <section className="flex gap-4">
        <article className="flex gap-2 text-white items-center">
          <CircleQuestionMark className="h-4.5 w-4.5" />
          <Bell className="h-4.5 w-4.5" />
          <Settings className="h-4.5 w-4.5" />
        </article>
        <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
      </section>
    </header>
  );
};

export default TopHeader;
