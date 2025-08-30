import { sideBarData, sideBarData2 } from "../constant/variableData";

const SideBar = () => {
  return (
    <aside>
      <header>
        <img src="/path/to/logo.png" alt="Logo" />
      </header>
      <section>
        <h2>File Manager</h2>
        <nav>
          <ul>
            {sideBarData.map((item) => (
              <li key={item.title}>
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <section>
        <h2>shared files</h2>
        <nav>
          <ul>
            {sideBarData2.map((item) => (
              <li key={item.title}>
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </nav>
        <button>Create shared Folder</button>
      </section>

      <footer>
        <section>
          <div>
            <p>Storage</p> <span>43%</span>
          </div>
          <progress max={100} value={43}></progress>
        </section>
        <button>Upgrade Storage</button>
      </footer>
    </aside>
  );
};

export default SideBar;
