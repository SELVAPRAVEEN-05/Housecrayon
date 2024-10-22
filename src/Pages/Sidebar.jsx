import { Box } from "@mui/material";
import React, {useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { RiDashboardFill, RiTeamLine } from "react-icons/ri";
import { ImUserTie } from "react-icons/im";
import { PiBuildings } from "react-icons/pi";
import { HiTag } from "react-icons/hi2";
import { IoSettingsSharp } from "react-icons/io5";
import { HiCloudArrowUp } from "react-icons/hi2";
import { PiNotepadFill } from "react-icons/pi";
import { AiFillFolderOpen, AiFillMessage } from "react-icons/ai";

function Sidebar({ toggleSidebar }) {
  const [clickedIcon, setClickedIcon] = useState(2);

  const Icons = [
    { id: 1, icon: <RiDashboardFill /> },
    { id: 2, icon: <RiTeamLine /> },
    { id: 3, icon: <ImUserTie /> },
    { id: 4, icon: <PiBuildings /> },
    { id: 5, icon: <HiTag /> },
    { id: 6, icon: <IoSettingsSharp /> },
    { id: 7, icon: <HiCloudArrowUp /> },
    { id: 8, icon: <PiNotepadFill /> },
    { id: 9, icon: <AiFillFolderOpen /> },
    { id: 10, icon: <AiFillMessage /> },
  ];


  return (
    <Box className="Sidebar">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          paddingLeft: "10px",
          backgroundColor: "#5078e1",
          height: "30px",
          width: "25px",
          borderRadius: "50px",
        }}
        onClick={toggleSidebar}
      >
        <FaChevronRight />
      </Box>
      <Box className="sidebar-hr"></Box>
      <Box className="sidebar-icon-container">
        {Icons.map((item) => (
          <Box
            key={item.id}
            className={`sidebar-subicons ${
              clickedIcon === item.id ? "clicked" : ""
            }`}
            onClick={() =>  setClickedIcon(item.id)}
          >
            {item.icon}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Sidebar;
