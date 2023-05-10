import React from "react";
import { useMediaQuery } from "react-responsive";
import "./App.css";
import SidePanel from "./components/side-panel/SidePanel";
import SidePanelMob from "./components/side-panel-mob/SidePanelMob";
import MainPanel from "./components/main-panel/MainPanel";
import MainPanelMob from "./components/main-panel-mob/MainPanelMob";

function App() {
  const [query, setQuery] = React.useState("");
  const isDesktopOrLaptop = useMediaQuery({
    query: "(max-width: 1400px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 1020px)",
  });

  return (
    <div className="container">
      <div className="wrapper">
        {isDesktopOrLaptop && <SidePanelMob />}
        {isMobile && <MainPanelMob query={query} setQuery={setQuery} />}
        <SidePanel />
        <MainPanel query={query} setQuery={setQuery} />
      </div>
    </div>
  );
}

export default App;
