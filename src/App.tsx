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

const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="fle">
      {/* <Header isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      {/* <h1 className={``}>ads</h1> */}
      <div className="flex">
        <div>{isOpen && <Sidebar />}</div>

        <div className="w-full">
          <div className="p-4 flex justify-between">
            <span className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              <BiMenu size={20} color="#03C9D7" />
            </span>
            <div className="flex gap-6">
              <SlBasket className="cursor-pointer" size={20} color="#03C9D7" />
              <BsChatLeft className="cursor-pointer" size={20} color="#03C9D7" />
              <IoMdNotificationsOutline className="cursor-pointer" size={20} color="#03C9D7" />
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
    </div>
  );
};

export default App;
