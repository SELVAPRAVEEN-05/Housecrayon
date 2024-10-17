import { Box, Divider, Typography, Badge } from "@mui/material";
import React from "react";
import Logo from "../assets/DynamicNetsoft.png";
import Profile from "../assets/image.png";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { GoBell } from "react-icons/go";

export default function Header() {
  return (
    <Box className="Head">
      <Box className="H-b">
        <Box className="H-logo">
          <img src={Logo} className="H-img" />
          <Divider orientation="vertical" flexItem className="H-hr" />
          <div className="H-title">
            PROPERTY MANAGEMENT SOLUTION
          </div>
        </Box>
        <Box className="H-search-container">
          <input className="H-searchbar" placeholder="Search"></input>
          <IoIosSearch className="search-icon" />
        </Box>
        <Box className="H-profile">
          <Badge color="primary" overlap="circular" variant="dot">
            <GoBell style={{ fontSize: "20px", color: "white" }} />
          </Badge>
          <Box className="H-profile-se">
            <Divider orientation="vertical" flexItem className="H-hr" />
            <Box className="H-profilepic-container">
              <img src={Profile} style={{height:'100%' ,width:'100%'}} />
            </Box>
            <Box className="H-details">
              <Typography className="H-title">
                Dark Devil
              </Typography>
              <Typography sx={{ color: "#98A0AC", fontSize: "11px" }}>
                Super Admin
              </Typography>
            </Box>
            <FaAngleDown />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
