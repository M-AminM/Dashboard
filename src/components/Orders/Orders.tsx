import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ordersData } from "../../data/dummy";

const BasicTable: React.FC = () => {
  return (
    <section className="px-8 pt-2 pb-8 md:p-2 ">
      <TableContainer className="dark:bg-darkMode" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                className="dark:text-white"
                sx={{ fontWeight: "bold" }}
              >
                Image
              </TableCell>
              <TableCell
                className="dark:text-white"
                sx={{ fontWeight: "bold" }}
                align="right"
              >
                Item
              </TableCell>
              <TableCell
                className="dark:text-white"
                sx={{ fontWeight: "bold" }}
                align="right"
              >
                Customer Name
              </TableCell>
              <TableCell
                className="dark:text-white"
                sx={{ fontWeight: "bold" }}
                align="right"
              >
                Total Amount
              </TableCell>
              <TableCell
                className="dark:text-white"
                sx={{ fontWeight: "bold" }}
                align="right"
              >
                Status
              </TableCell>
              <TableCell
                className="dark:text-white"
                sx={{ fontWeight: "bold" }}
                align="right"
              >
                Order ID
              </TableCell>
              <TableCell
                className="dark:text-white"
                sx={{ fontWeight: "bold" }}
                align="right"
              >
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
                <TableCell className="dark:text-white" align="right">
                  {row.OrderItems}
                </TableCell>
                <TableCell className="dark:text-white" align="right">
                  {row.CustomerName}
                </TableCell>
                <TableCell className="dark:text-white" align="right">
                  {row.TotalAmount}
                </TableCell>
                <TableCell className="dark:text-white" align="right">
                  {row.Status}
                </TableCell>
                <TableCell className="dark:text-white" align="right">
                  {row.OrderID}
                </TableCell>
                <TableCell className="dark:text-white" align="right">
                  {row.Location}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default BasicTable;