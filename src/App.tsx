import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Router from "./components/Router/Router";
import Header from "./components/Header/Header";
import "./index.css";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<boolean>(false);
  const overFlowHidden = document.querySelector("body") as HTMLElement | null;

  const asda = () => {
    if (overFlowHidden != null) {
      if (isOpen === false) {
        overFlowHidden.style.overflow = "";
      } else {
        overFlowHidden.style.overflow = "hidden";
      }
    }
  };
  asda();

  const changeTheme = () => {
    if (overFlowHidden != null) {
      if (theme) {
        overFlowHidden.style.background = "#1F2235";
      } else {
        overFlowHidden.style.background = "rgba(0, 0, 0, 0.1)";
      }
    }
  };
  changeTheme();

  return (
    <div className={`flex ${theme ? "dark" : ""}`}>
      <div>
        {isOpen && (
          <Sidebar theme={theme} isOpen={isOpen} setIsOpen={setIsOpen} />
        )}
      </div>
      <div className="main-content w-full">
        <Header isOpen={isOpen} theme={theme} setIsOpen={setIsOpen} setTheme={setTheme} />
        <Main>
          <Router theme={theme} isOpen={isOpen} />
        </Main>
      </div>
    </div>
  );
};

export default App;
