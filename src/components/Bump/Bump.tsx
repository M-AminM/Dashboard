import React from "react";
import BumpChart from "../../components/Charts/Bump";
import { Box } from "@mui/material";

interface Props {
  isOpen: boolean;
}

const Bump:React.FC<Props> = ({ isOpen }) => {
  const dynamicWidth: string = "calc(100% - " + "10px" + ")";
  return (
    <section style={{ width: isOpen ? dynamicWidth : "" }}>
      <Box>
        <Box height="35vh">
          <BumpChart />
        </Box>
      </Box>
    </section>
  );
};

export default Bump;
