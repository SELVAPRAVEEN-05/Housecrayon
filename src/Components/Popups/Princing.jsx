import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { useState } from "react";
import { Box } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { FaChevronRight } from "react-icons/fa";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PrincingComponent({ setPrincing }) {
  const [openIndex, setOpenIndex] = useState(null);

  const pricingItems = [
    { id: 1, label: "Primary", colorClass: "primary", bgColor: "#B3776D" },
    { id: 2, label: "Secondary", colorClass: "secondary", bgColor: "#896DB3" },
    { id: 3, label: "One Time Charges", colorClass: "one-time-charges", bgColor: "#6DAFB3" },
    { id: 4, label: "Refundables", colorClass: "refundables", bgColor: "#6D80B3" },
    { id: 5, label: "Inventory Item", colorClass: "inventory-item", bgColor: "#B3A16D" },
    { id: 6, label: "Parking Slot", colorClass: "parking-slot", bgColor: "#B3776D" },
  ];

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    setPrincing(false); // Close the parent state when dialog is closed
  };

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
        "& .MuiDialogActions-root": {
          padding: 0,
        },
        "& .MuiPaper-root": {
          width: "484px",
          height: "550px",
        },
      }}
    >
      <DialogContent>
        <div className="pricing-table">
          <div
            style={{
              color: "#091B29",
              fontWeight: "600",
              marginBottom: "15px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>Pricing Table</Box>
            <Box onClick={handleClose} style={{cursor:'pointer'}}>
              <RxCross2 />
            </Box>
          </div>
          {pricingItems.map((item, index) => (
            <div
              key={item.id}
              className={`pricing-item ${item.colorClass} ${
                openIndex === index ? "open" : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <div className="pricing-label">
                <div
                  className="item-number"
                  style={{ backgroundColor: item.bgColor }}
                >
                  {`0${item.id}`}
                </div>
                <div style={{ color: item.bgColor }}>{item.label}</div>
              </div>
              <div className="icon" style={{ color: item.bgColor }}>
                <FaChevronRight />
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
