import React from "react";
import phota from "../../assets/house.jpeg";
import { PiSquareHalfBottomLight, PiBathtubLight } from "react-icons/pi"; // Importing PiBathtubLight
import { Box, Divider } from "@mui/material";
import { RiBook2Line } from "react-icons/ri";
import { BiBed } from "react-icons/bi";
import { GoHome } from "react-icons/go";

function Houseimg() {
  return (
    <Box className="img-name">
      <Box className="discountimg">
        <Box className="discountfirimg">
          <img src={phota} className="discountall" />
        </Box>
        <Box className="discountleftmain">
          <Box className="leftimg2">
            <Box className="leftimg">
              <img src={phota} className="discountall" />
            </Box>
            <Box className="leftimg">
              <img src={phota} className="discountall" />
            </Box>
          </Box>
          <Box className="leftimg2">
            <Box className="leftimg">
              <img src={phota} className="discountall" />
            </Box>
            <Box className="leftimg">
              <img src={phota} className="discountall" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="disbody">
        <Box className="namedis">
          <Box className="disname">Jumeirah Estate</Box>
          <Box className="disstatus">UNT-1234</Box>
        </Box>
        <Box className="dissubname">Rubix Apartment, K Tower, Floor 1</Box>
        <Box className="quantities">
          <BiBed />
          <Box className="naval">2</Box>

          <PiBathtubLight /> {/* Correct reference */}
          <Box className="naval">2</Box>

          <GoHome />
          <Box className="naval">3BHK</Box>

          <PiSquareHalfBottomLight />
          <Box className="naval">2000</Box>
          <Box>Sq.Ft</Box>
        </Box>
        <Divider />
        <Box className="book">
          <Box className="iconbook">
            <RiBook2Line />
            <Box>Handbook</Box>
          </Box>
          <Box className="view">View / Download</Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Houseimg;
