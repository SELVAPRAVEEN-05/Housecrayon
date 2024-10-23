import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { useState } from "react";
import { Box, Divider } from "@mui/material";
import { RxCross1 } from "react-icons/rx";
import "../../Styles/App.css";
import Houseimg from "./Houseimg";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Cardpopup({ setPrincing }) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    setPrincing(false);
  };

  const billDetails = [
    {
      billName: "Bill Name Here",
      price: "$1,000",
      discountAmount: "10%",
    },
    {
      billName: "Another Bill",
      price: "$1,500",
      discountAmount: "20%",
    },
    {
      billName: "Third Bill",
      price: "$1,200",
      discountAmount: "50%",
    },
    {
      billName: "Fourth Bill",
      price: "$2,000",
      discountAmount: "15%",
    },
    {
      billName: "Fifth Bill",
      price: "$2,500",
      discountAmount: "12%",
    },
    {
      billName: "Sixth Bill",
      price: "$3,000",
      discountAmount: "8%",
    },
    {
      billName: "Another Bill",
      price: "$1,500",
      discountAmount: "20%",
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
            <Box className="distitle">Add Discount To Unit</Box>
            <RxCross1 onClick={handleClose} />
          </Box>
          <Divider className="dishr" />
          <Box className="dicright">
            <Houseimg />
            <Box className="disprices">
              <Box className="leftpricontainer" sx={{display:'flex'}}>
                <Box className="pricesle">UNIT PRICE DETAIL</Box>
                <Box className="methe">
                  {billDetails.map((detail, index) => (
                    <Box sx={{ marginTop: "15px" }} key={index}>
                      <Box className="namerow">
                        <Box>{detail.billName}</Box>
                        <Box>{detail.price}</Box>
                      </Box>
                      <Box className="namerow" sx={{ color: "#98A0AC" ,fontSize:'12px'}}>
                        <Box>Discount</Box>
                          <Box sx={{ fontSize: "12px" }}>
                            {detail.discountAmount}
                          </Box>
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
