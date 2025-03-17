import { useState } from "react";
import "./App.css";
import Content from "./components/content/content.tsx";
import SideBar from "./components/side-bar/side-bar.tsx";
import TopBar from "./components/top-bar/top-bar.tsx";

function App() {
  const [closeSidebar, setCloseSidebar] = useState(false)

  return (
    <div className={`container ${closeSidebar ? 'collapsed' : 'expanded'}`}>
      <div>
        <SideBar closeSidebar={closeSidebar} toggleSidebar={() => setCloseSidebar(!closeSidebar)}/>
      </div>
      <div className="right-container">
        <TopBar />
        <Content />
      </div>
    </div>
  );
}

export default App;
