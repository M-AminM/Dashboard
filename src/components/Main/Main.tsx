import React from "react";

interface Props {
  children: React.ReactNode;
}
const Main: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default Main;
