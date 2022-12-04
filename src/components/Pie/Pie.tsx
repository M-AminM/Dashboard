import React from "react";
import { Box } from "@mui/material";
import PieChart from "../Charts/Pie";

interface Props {
  height: string;
}

const Pie: React.FC<Props> = ({ height }) => {
  return (
    <Box m="20px">
      <Box height={height}>
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
