import React from "react";
import Line from "../Charts/Line";
import { Box } from "@mui/material";

interface Props {
  isOpen: boolean;
  height: string;
}

const LineChart: React.FC<Props> = ({ isOpen, height }) => {
  const dynamicWidth: string = "calc(100vw - " + "220px" + ")";

  return (
    <Box style={{ width: isOpen ? dynamicWidth : "" }}>
      <Box height={height}>
        <Line />
      </Box>
    </Box>
  );
};

export default LineChart;
