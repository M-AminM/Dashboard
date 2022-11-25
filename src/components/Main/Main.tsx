import React from "react";

interface Props {
  children: React.ReactNode;
}
const Main: React.FC<Props> = ({ children }) => {
  return <main>{children}</main>;
};

export default Main;
