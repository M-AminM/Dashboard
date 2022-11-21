import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { links } from "../../data/dummy";

const Sidebar: React.FC = () => {
  const location = useLocation();

  const { pathname } = location;
  console.log(pathname);

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";
  return (
    <section className="p-4 overflow-auto w-56  bg-white">
      <h1 className="font-bold pb-8">Shoppy</h1>

      <div className="flex flex-col h-screen overflow-auto">
        {links.map((data) => {
          return (
            <>
              <h2 className="text-sm font-medium text-gray">{data.title}</h2>
              {data.links.map((link, index) => {
                return (
                  <NavLink
                    to={`/${link.name}`}
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
                    <span>{link.icon}</span>
                    {link.name}
                  </NavLink>
                );
              })}
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
