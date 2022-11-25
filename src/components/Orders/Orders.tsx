import React from "react";
import { ordersData } from "../../data/dummy";

const Orders = () => {
  const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
  ];
  return (
    <div className="flex justify-center items-center p-4">
      <table
        className="border-2 border-gray"
        style={{ width: "800px", height: "200px" }}
      >
        <tr>
          <th className="border-b-2 border-gray md:text-xs">Image</th>
          <th className="border-b-2 border-gray md:text-xs">Item</th>
          <th className="border-b-2 border-gray md:text-xs">Customer Name</th>
          <th className="border-b-2 border-gray md:text-xs">Totla Amount</th>
          <th className="border-b-2 border-gray md:text-xs">Status</th>
          <th className="border-b-2 border-gray md:text-xs">Order ID</th>
          <th className="border-b-2 border-gray md:text-xs">Location</th>
        </tr>
        {ordersData.map((order, key) => {
          return (
            <tr className="m-" key={key}>
              <td className="text-center md:text-xs"><img className="w-20 h-20 object-cover rounded" src={order.ProductImage} /></td>
              <td className="text-center md:text-xs">{order.Location}</td>
              <td className="text-center md:text-xs">{order.CustomerName}</td>
              <td className="text-center md:text-xs">{order.TotalAmount}</td>
              <td className="text-center md:text-xs">{order.Status}</td>
              <td className="text-center md:text-xs">{order.OrderID}</td>
              <td className="text-center md:text-xs">{order.Location}</td>
              <td className="text-center md:text-xs"></td>
              {/* <td className="text-center">{val.age}</td>
              <td className="text-center">{val.gender}</td> */}
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Orders;
