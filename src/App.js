import React from "react";
import { useMediaQuery } from "react-responsive";
import "./App.css";
import SidePanel from "./components/side-panel/SidePanel";
import SidePanelMob from "./components/side-panel-mob/SidePanelMob";
import MainPanel from "./components/main-panel/MainPanel";

function App() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(max-width: 1400px)",
  });

  return (
    <div className="container">
      <div className="wrapper">
        {isDesktopOrLaptop && <SidePanelMob />}
        <SidePanel />
        <MainPanel />
      </div>
    </div>
  );
}

export default App;
