import logo from "../assets/logo.png";
import file from "../assets/fileoimage.png";
import { Play } from "lucide-react";
import { navData, userStats } from "../constant/variableData";
const HomePage = () => {
  return (
    <main className="h-screen bg-[#181a1f] ">
      <header className="flex items-center h-[10vh]  justify-between p-4">
        <article className="w-[8rem]">
          <img src={logo} alt="logo" className="w-full h-full object-cover" />
        </article>
        <nav>
          <ul className="text-white gap-8  flex space-x-4">
            {navData.map((item) => (
              <li key={item.name}>
                <a
                  className="text-white hover:text-[#3146ff] duration-300 transition-all text-lg font-medium tracking-wider"
                  href={item.href}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button className="px-6 py-2.5  font-medium tracking-wider border text-white border-white">
          Login
        </button>
      </header>

      <main className="flex  h-[90vh] ">
        <section className="w-1/2 flex flex-col  pl-16 pt-20 h-[90%] ">
          <article className="w-[65%] flex flex-col gap-6">
            <h2 className="font-bold  text-5xl text-white ">
              Organize your files and keep them safe, everywhere
            </h2>
            <p className="text-base font-normal text-[#788199]">
              We offer secure storage , ensuring all your data is protected from
              unauthoprized access.
            </p>
          </article>
          <article className="mt-8 flex gap-4">
            <button className="text-white text-base bg-[#3146ff] px-6 py-1.5  font-medium tracking-wider">
              Get Started
            </button>
            <button className="text-white text-xs px-4 flex items-center gap-2 py-1.5 font-medium tracking-wider">
              <Play className="w-4 h-4" />
              Request a demo
            </button>
          </article>
          <article className="mt-auto flex ">
            {userStats.map((stat) => (
              <div className="flex flex-col px-6 gap-1 border-r-1 last:border-r-0 border-[#788199]">
                {stat.icon}
                <h3 className="font-semibold text-white text-lg">
                  {stat.statNumber}
                </h3>
                <p className="text-[#788199] text-sm">{stat.description}</p>
              </div>
            ))}
          </article>
        </section>

        <section className="w-1/2  h-[90%]  flex ">
          <div className=" w-[80%] mt-auto">
            <img src={file} alt="File" className="w-full h-full object-cover" />
          </div>
        </section>
      </main>
    </main>
  );
};

export default HomePage;
