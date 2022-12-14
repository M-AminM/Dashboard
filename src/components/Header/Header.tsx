import React from "react";
import { BiMenu } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { BsChatLeft } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

interface Props {
  isOpen: boolean;
  theme: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<Props> = ({ isOpen, theme, setIsOpen, setTheme }) => {
  return (
    <header className="p-4 flex justify-between ">
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
    </header>
  );
};

export default Header;
