import {
  LayoutGrid,
  ArrowRightLeft,
  Plus,
  Image,
  Music,
  SquarePlay,
  FileText,
  File,
} from "lucide-react";
import img1 from "../assets/Gemini_Generated_Image_da9f5mda9f5mda9f.png";
import img2 from "../assets/WhatsApp Image 2025-09-03 at 18.34.16_72b13758.jpg";
import img3 from "../assets/cases.png";
import img4 from "../assets/stress.png";
import OverviewStorageCards from "../components/ui/overviewStorageCards";
import SuggestionsCards from "../components/ui/suggestionsCards";
const Dashboard = () => {
  return (
    <main className="p-6 overflow-y-auto">
      <header className="flex justify-between">
        <section className="bg-[#272c34] py-1.5 px-5 w-[15rem] text-white rounded-md">
          <h2 className="flex items-center  gap-1 text-base ">
            <LayoutGrid className="w-4 h-4" />
            -Overview
          </h2>
        </section>
        <section>
          <article className="text-white flex gap-3 font-medium">
            <button className=" flex gap-2 bg-[#272c34] px-4 py-1.5 items-center rounded-md">
              <ArrowRightLeft className="w-4 h-4" /> Sort
            </button>
            <button className=" flex gap-2 bg-[#272c34] px-4 py-1.5 items-center rounded-md">
              <LayoutGrid className="w-4 h-4" /> View
            </button>
            <button className=" bg-[#3146ff] flex gap-2 px-4 py-1.5 items-center rounded-md">
              <Plus className="w-4 h-4" /> Create
            </button>
          </article>
        </section>
      </header>
      <section className="mt-6 flex flex-col gap-6">
        <h2 className="text-white font-medium text-2xl ">Overview Stoarge</h2>
        <article className="flex gap-4">
          <OverviewStorageCards
            Icon={Image}
            color={"bg-[#ff4647]"}
            type="Images"
            itemCount={13}
            storage="1.3GB of 3GB"
          />
          <OverviewStorageCards
            Icon={SquarePlay}
            color={"bg-[#3146ff]"}
            type="Video"
            itemCount={45}
            storage="1.3GB of 3GB"
          />
          <OverviewStorageCards
            Icon={Music}
            color={"bg-[#41cd65]"}
            type="Music"
            itemCount={12}
            storage="1.3GB of 3GB"
          />
          <OverviewStorageCards
            Icon={File}
            color={"bg-[#f3cc31]"}
            type="Documents"
            itemCount={293}
            storage="1.3GB of 3GB"
          />
        </article>
      </section>
      <section className="mt-6 flex flex-col gap-6">
        <h2 className="text-white font-medium text-2xl ">Suggestions</h2>
        <article className="flex gap-4 ">
          <SuggestionsCards
            img={img1}
            Icon={FileText}
            text="School Paper.docx"
          />
          <SuggestionsCards img={img2} Icon={FileText} text="Work Paper.pdf" />
          <SuggestionsCards img={img3} Icon={Image} text="IMG_0000.jpg" />
          <SuggestionsCards
            img={img4}
            Icon={FileText}
            text="import  Paper.docx"
          />
        </article>
      </section>
    </main>
  );
};

export default Dashboard;
