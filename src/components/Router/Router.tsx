import React from "react";
import { Routes, Route } from "react-router-dom";
import Orders from "../Orders/Orders";
import Ecommerce from "../Ecommerce/Ecommerce";
import Employees from "../Employees/Employees";
import Pie from "../Pie/Pie";
import Bar from "../Bar/Bar";
import Calendar from "../Calendar/Calendar";
import Area from "../Area/Area";
import Bump from "../Line/Line";
import Customers from "../Customers/Customers";
import Kanban from "../Kanban/Kanban";

interface Props {
  theme: boolean;
  isOpen: boolean;
}
const Router: React.FC<Props> = ({ theme, isOpen }) => {
  return (
    <Routes>
      <Route path="/" element={<Ecommerce theme={theme} />} />
      <Route path="/ecommerce" element={<Ecommerce theme={theme} />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/pie" element={<Pie height="75vh" />} />
      <Route path="/bar" element={<Bar isOpen={isOpen} />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/area" element={<Area isOpen={isOpen} height="85vh" />} />
      <Route path="/line" element={<Bump isOpen={isOpen} height="85vh" />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/kanban" element={<Kanban />} />
    </Routes>
  );
};

export default Router;
