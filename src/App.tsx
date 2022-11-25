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
import "./index.css";

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

  return (
    <div className="flex">
      <div>{isOpen && <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />}</div>

      <div className="main-content w-full">
        <div className="p-4 flex justify-between ">
          <span className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <BiMenu size={20} color="#03C9D7" />
          </span>
          <div className="flex gap-6">
            <SlBasket className="cursor-pointer" size={20} color="#03C9D7" />
            <BsChatLeft className="cursor-pointer" size={20} color="#03C9D7" />
            <IoMdNotificationsOutline
              className="cursor-pointer"
              size={20}
              color="#03C9D7"
            />
          </div>
        </div>

        <Main>
          <Routes>
            <Route path="/" element={<Ecommerce />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </Main>
      </div>
    </div>
  );
};

export default App;
