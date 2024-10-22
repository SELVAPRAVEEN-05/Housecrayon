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

export default function Discount({ setPrincing }) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    setPrincing(false);
  };

  const billDetails = [
    {
      billName: "Bill Name Here",
      price: "$1,000",
      discountAmount: "100,000",
      currency: "ADE",
    },
    {
      billName: "Another Bill",
      price: "$1,500",
      discountAmount: "200,000",
      currency: "ADE",
    },
    {
      billName: "Third Bill",
      price: "$1,200",
      discountAmount: "50,000",
      currency: "ADE",
    },
    {
      billName: "Fourth Bill",
      price: "$2,000",
      discountAmount: "150,000",
      currency: "ADE",
    },
    {
      billName: "Fifth Bill",
      price: "$2,500",
      discountAmount: "120,000",
      currency: "ADE",
    },
    {
      billName: "Sixth Bill",
      price: "$3,000",
      discountAmount: "80,000",
      currency: "ADE",
    },
    {
      billName: "Another Bill",
      price: "$1,500",
      discountAmount: "200,000",
      currency: "ADE",
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
              <Box className="leftpricontainer">
                <Box className="pricesle">UNIT PRICE DETAIL</Box>
                <Box className="methe">
                  {billDetails.map((detail, index) => (
                    <Box sx={{ marginTop: "10px" }} key={index}>
                      <Box className="namerow">
                        <Box>{detail.billName}</Box>
                        <Box>{detail.price}</Box>
                      </Box>
                      <Box className="namerow" sx={{ color: "#98A0AC" }}>
                        <Box>Discount</Box>
                        <Box className="amature">
                          <Box sx={{ fontSize: "12px" }}>
                            {detail.discountAmount}
                          </Box>
                          <Box>{detail.currency}</Box>
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
