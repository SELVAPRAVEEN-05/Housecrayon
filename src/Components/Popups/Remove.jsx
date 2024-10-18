import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { useState } from "react";
import { Box, Divider } from "@mui/material";
import { BiBed } from "react-icons/bi"; // Import BiBed icon
import { PiBathtubLight, PiSquareHalfBottomLight } from "react-icons/pi"; // Ensure you import these as well
import { GoHome } from "react-icons/go";
import { RiBook2Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import "../../Styles/App.css";
import phota from "../../assets/house.jpeg";
import { FaRegTrashCan } from "react-icons/fa6";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Remove({ setPrincing }) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    setPrincing(false);
  };

  const billDetails = [
    {
      billName: "Bill Name Here",
      price: "$1,000",
    },
    {
      billName: "Another Bill",
      price: "$1,500",
    },
    {
      billName: "Third Bill",
      price: "$1,200",
    },
    {
      billName: "Fourth Bill",
      price: "$2,000",
    },
    {
      billName: "Fifth Bill",
      price: "$2,500",
    },
    {
      billName: "Sixth Bill",
      price: "$3,000",
    },
    {
      billName: "Another Bill",
      price: "$1,500",
    },
  ];

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      sx={{
        "& .MuiDialogContent-root": {
          padding: 0,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        },
        "& .MuiPaper-root": {
          width: "888px",
          height: "650px",
        },
      }}
    >
      <DialogContent>
        <Box className="discount">
          <Box className="disheader">
            <Box className="distitle">Remove Component</Box>
            <RxCross1 onClick={handleClose} />
          </Box>
          <Divider className="dishr" />
          <Box className="dicright">
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
                <Box className="dissubname">
                  Rubix Apartment, K Tower, Floor 1
                </Box>
                <Box className="quantities">
                  <BiBed />
                  <Box className="naval">2</Box>

                  <PiBathtubLight />
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
            <Box className="disprices">
              <Box className="leftpricontainer">
                <Box className="pricesle">UNIT PRICE DETAIL</Box>
                <Box className="methe">
                  {billDetails.map((detail, index) => (
                    <Box sx={{ marginTop: "15px" }} key={index}>
                      <Box className="namerow" sx={{marginBottom:'15px'}}>
                        <Box>{detail.billName}</Box>
                        <Box>{detail.price} <span className="trashbin"><FaRegTrashCan /></span> </Box>
                      </Box>
                      <Divider orientation="horizontal" />
                    </Box>
                  ))}
                </Box>
                <Box className="total">
                  <Box>Final Total</Box>
                  <Box>$11000</Box>
                </Box>
                <Box className="apdis" onClick={handleClose}>
                  Apply Discount
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
