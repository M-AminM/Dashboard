import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import { BiMenu } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { BsChatLeft } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import Main from "./components/Main/Main";
import Orders from "./components/Orders/Orders";
import Ecommerce from "./components/Ecommerce/Ecommerce";
import Employees from "./components/Employees/Employees";
import "./index.css";
import Pie from "./components/Pie/Pie";
import Bar from "./components/Bar/Bar";
import Calendar from "./components/Calendar/Calendar";
import Area from "./components/Area/Area";
import { MdLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import Bump from "./components/Line/Line";
import Editor from "./components/Editor/Editor";
import Customers from "./components/Customers/Customers";
import Kanban from "./components/Kanban/Kanban";

const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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

  const [theme, setTheme] = useState<boolean>(false);

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
        <div className="p-4 flex justify-between ">
          <span className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <BiMenu size={20} color={theme ? "#FF4A59" : "#03C9D7"} />
          </span>
          <div className="flex gap-6">
            <SlBasket
              className="cursor-pointer"
              size={20}
              color={theme ? "#FF4A59" : "#03C9D7"}
            />
            <BsChatLeft
              className="cursor-pointer"
              size={20}
              color={theme ? "#FF4A59" : "#03C9D7"}
            />
            <IoMdNotificationsOutline
              className="cursor-pointer"
              size={20}
              color={theme ? "#FF4A59" : "#03C9D7"}
            />
            <button
              onClick={() => setTheme(!theme)}
              className="text-black dark:text-white"
            >
              {theme ? (
                <MdLightMode size={20} color="#FF4A59" />
              ) : (
                <MdOutlineDarkMode size={20} color="#03C9D7" />
              )}
            </button>
          </div>
        </div>

        <Main>
          <Routes>
            <Route
              path="/"
              element={<Ecommerce theme={theme} isOpen={isOpen} />}
            />
            <Route
              path="/ecommerce"
              element={<Ecommerce theme={theme} isOpen={isOpen} />}
            />
            <Route path="/orders" element={<Orders />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/pie" element={<Pie height="75vh" />} />
            <Route path="/bar" element={<Bar isOpen={isOpen} />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/area" element={<Area isOpen={isOpen} height="85vh" />} />
            <Route path="/line" element={<Bump isOpen={isOpen} height="85vh" />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/kanban" element={<Kanban />} />
          </Routes>
        </Main>
      </div>
    </div>
  );
};

export default App;
