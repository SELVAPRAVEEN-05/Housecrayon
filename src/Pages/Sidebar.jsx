import { Box } from "@mui/material";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa"; 

function Sidebar({ isExpanded, toggleSidebar }) {
  return (
    <Box className="Sidebar">
      <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={toggleSidebar}>
        <FaChevronRight />
      </Box>
    </Box>
  );
}

export default Sidebar;
