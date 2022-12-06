import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ordersData } from "../../data/dummy";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const BasicTable: React.FC = () => {
  return (
    <section className="px-8 pt-2 pb-8 md:p-2 ">
      <TableContainer className="dark:bg-darkMode" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="dark:text-white" sx={{ fontWeight: "bold" }}>Image</TableCell>
              <TableCell className="dark:text-white" sx={{ fontWeight: "bold" }} align="right">
                Item
              </TableCell>
              <TableCell className="dark:text-white" sx={{ fontWeight: "bold" }} align="right">
                Customer Name
              </TableCell>
              <TableCell className="dark:text-white" sx={{ fontWeight: "bold" }} align="right">
                Total Amount
              </TableCell>
              <TableCell className="dark:text-white" sx={{ fontWeight: "bold" }} align="right">
                Status
              </TableCell>
              <TableCell className="dark:text-white" sx={{ fontWeight: "bold" }} align="right">
                Order ID
              </TableCell>
              <TableCell className="dark:text-white" sx={{ fontWeight: "bold" }} align="right">
                Location
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ordersData.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <img
                    className="w-20 h-20 object-cover rounded"
                    src={row.ProductImage}
                    alt={row.OrderItems}
                  />
                </TableCell>
                <TableCell className="dark:text-white" align="right">{row.OrderItems}</TableCell>
                <TableCell className="dark:text-white" align="right">{row.CustomerName}</TableCell>
                <TableCell className="dark:text-white" align="right">{row.TotalAmount}</TableCell>
                <TableCell className="dark:text-white" align="right">{row.Status}</TableCell>
                <TableCell className="dark:text-white" align="right">{row.OrderID}</TableCell>
                <TableCell className="dark:text-white" align="right">{row.Location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default BasicTable;

// import React from "react";
// import { ordersData } from "../../data/dummy";

// const Orders = () => {
//   const data = [
//     { name: "Anom", age: 19, gender: "Male" },
//     { name: "Megha", age: 19, gender: "Female" },
//     { name: "Subham", age: 25, gender: "Male" },
//   ];
//   return (
//     <div className="flex justify-center items-center p-4">
//       <table
//         className="border-2 border-gray"
//         style={{ width: "800px", height: "200px" }}
//       >
//         <tr>
//           <th className="border-b-2 border-gray md:text-xs">Image</th>
//           <th className="border-b-2 border-gray md:text-xs">Item</th>
//           <th className="border-b-2 border-gray md:text-xs">Customer Name</th>
//           <th className="border-b-2 border-gray md:text-xs">Totla Amount</th>
//           <th className="border-b-2 border-gray md:text-xs">Status</th>
//           <th className="border-b-2 border-gray md:text-xs">Order ID</th>
//           <th className="border-b-2 border-gray md:text-xs">Location</th>
//         </tr>
//         {ordersData.map((order, key) => {
//           return (
//             <tr className="m-" key={key}>
//               <td className="text-center md:text-xs"><img className="w-20 h-20 object-cover rounded" src={order.ProductImage} /></td>
//               <td className="text-center md:text-xs">{order.Location}</td>
//               <td className="text-center md:text-xs">{order.CustomerName}</td>
//               <td className="text-center md:text-xs">{order.TotalAmount}</td>
//               <td className="text-center md:text-xs">{order.Status}</td>
//               <td className="text-center md:text-xs">{order.OrderID}</td>
//               <td className="text-center md:text-xs">{order.Location}</td>
//               <td className="text-center md:text-xs"></td>
//               {/* <td className="text-center">{val.age}</td>
//               <td className="text-center">{val.gender}</td> */}
//             </tr>
//           );
//         })}
//       </table>
//     </div>
//   );
// };

// export default Orders;
