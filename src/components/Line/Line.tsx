import React from "react";
import { Box } from "@mui/material";
import AreaBump from "../Charts/AreaBump";

interface Props {
  isOpen: boolean;
}

const Bar: React.FC<Props> = ({ isOpen }) => {
  const dynamicWidth: string = "calc(100% - " + "60px" + ")";
  return (
    <section>
      <Box>
        <Box height="35vh">
          <AreaBump />
        </Box>
      </Box>
    </section>
  );
};

export default Bar;
