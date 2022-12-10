import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function createData(
  name: string,
  calories: string,
  fat: number,
  carbs: string,
  protein: number,
  price: number
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
        status: "active",
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
        status: "pending",
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            className="dark:text-white"
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell className="dark:text-white" component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell className="dark:text-white" align="right">{row.calories}</TableCell>
        <TableCell className="dark:text-white" align="right">{row.fat}</TableCell>
        <TableCell className="dark:text-white" align="right">{row.carbs}</TableCell>
        <TableCell className="dark:text-white" align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div" className="dark:text-white">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell className="dark:text-white">Date</TableCell>
                    <TableCell className="dark:text-white">Customer</TableCell>
                    <TableCell className="dark:text-white" align="right">Status</TableCell>
                    <TableCell className="dark:text-white" align="right">Budget ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell className="dark:text-white" component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell className="dark:text-white">{historyRow.customerId}</TableCell>
                      <TableCell className="dark:text-white" align="right">{historyRow.status}</TableCell>
                      <TableCell className="dark:text-white" align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData("Karim", "ReactJs", 6.0, "USA", 1, 3.99),
  createData("Jasem", "Html&Css", 9.0, "INDIA", 2, 4.99),
  createData("Karim-007", "JS", 16.0, "ZAMBIA", 3, 3.79),
  createData("Jasem-first", "NextJs", 4, "Qom", 4, 2.5),
];

export default function CollapsibleTable() {
  return (
    <section className="px-8 pt-2 pb-8 md:p-2 ">
      <TableContainer className="dark:bg-darkMode" component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell className="dark:text-white" >Name</TableCell>
              <TableCell className="dark:text-white" align="right">Project Name</TableCell>
              <TableCell className="dark:text-white" align="right">Weeks</TableCell>
              <TableCell className="dark:text-white" align="right">Location</TableCell>
              <TableCell className="dark:text-white" align="right">Customer ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
}
