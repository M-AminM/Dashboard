import React from "react";

interface Props {
  text: string;
}

const Button: React.FC<Props> = ({ text }) => {
  return (
    <button className="rounded-md bg-midBlue px-4 py-2 flex justify-center items-center text-white font-semibold">
      {text}
    </button>
  );
};

export default Button;
