import React from "react";
import { Box } from "@mui/material";
import AreaBump from "../Charts/AreaBump";

interface Props {
  isOpen: boolean;
  height: string;
}

const Area: React.FC<Props> = ({ isOpen, height }) => {
  const dynamicWidth: string = "calc(100vw - " + "220px" + ")";

  return (
    <Box style={{ width: isOpen ? dynamicWidth : "" }}>
      <Box height={height}>
        <AreaBump />
      </Box>
    </Box>
  );
};

export default Area;
