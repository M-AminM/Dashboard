import React from "react";
import { Box } from "@mui/material";
import BarChart from "../Charts/Bar";

interface Props {
  isOpen: boolean;
}

const Bar: React.FC<Props> = ({ isOpen }) => {
  const dynamicWidth: string = "calc(100vw - " + "220px" + ")";

  return (
    <Box style={{ width: isOpen ? dynamicWidth : "" }}>
      <Box height="80vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
