import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { links } from "../../data/dummy";
import { MdOutlineCancel } from "react-icons/md";
import "../../index.css";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const { pathname } = location;

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <section className="overflow-auto md:absolute w-full " style={{zIndex: 20}}>
      <div className="ja" onClick={() => setIsOpen(!isOpen)}></div>

      <div className="py-4 pl-4 w-56 bg-white">
        <div className="flex justify-between">
          <h1 className="font-bold pb-8">Shoppy</h1>
          <span
            className="pt-1.5 hidden md:block pr-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MdOutlineCancel />
          </span>
        </div>
        <div className="flex flex-col h-screen overflow-auto">
          {links.map((data, index) => {
            return (
              <div key={index}>
                <h2 className="text-sm font-medium text-gray">{data.title}</h2>
                {data.links.map((link, index) => {
                  return (
                    <NavLink
                      to={`/${link.name}`}
                      key={index}
                      style={({ isActive }) => ({
                        backgroundColor:
                          isActive ||
                          (pathname === "/" && link.name === "ecommerce")
                            ? "#03C9D7"
                            : "",
                      })}
                      className={({ isActive }) =>
                        isActive ||
                        (pathname === "/" && link.name === "ecommerce")
                          ? activeLink
                          : normalLink
                      }
                    >
                      <span className={`${index === 7 ? "mb-10" : ""}`}>
                        {link.icon}
                      </span>
                      {link.name}
                    </NavLink>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
