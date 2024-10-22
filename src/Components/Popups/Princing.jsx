import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { useState } from "react";
import  {Box} from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { FaChevronRight } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import Secondary from "./Secondary";
import Primary from "./Primary";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PrincingComponent({ setPrincing }) {


  
  const [openIndex, setOpenIndex] = useState(null);
  const [hoverdetails, setHoverDetails] = useState(false);

  const handleHoverDetails = (id) => {
    setHoverDetails(id);
  };

  const handleHoverDetailsOff = () => {
    setHoverDetails(false);
  };

  const pricingItems = [
    { id: 1, label: "Primary", colorClass: "#feeaea80", bgColor: "#B3776D" },
    { id: 2, label: "Secondary", colorClass: "#ede4fe80", bgColor: "#896DB3" },
    {
      id: 3,
      label: "One Time Charges",
      colorClass: "#dbf0f180",
      bgColor: "#6DAFB3",
    },
    {
      id: 4,
      label: "Refundables",
      colorClass: "#e4edff80",
      bgColor: "#6D80B3",
    },
    {
      id: 5,
      label: "Inventory Item",
      colorClass: "#fffad880",
      bgColor: "#B3A16D",
    },
    {
      id: 6,
      label: "Parking Slot",
      colorClass: "#feeaea80",
      bgColor: "#B3776D",
    },
  ];

  const handleClick = (id) => {
    setOpenIndex(openIndex == id ? null : id);
  };

  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    setPrincing(false);
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
        <Box className="pricing-table">
          <Box
            style={{
              color: "#091B29",
              fontWeight: "600",
              marginBottom: "15px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>Pricing Table</Box>
            <Box onClick={handleClose} style={{ cursor: "pointer" }}>
              <RxCross2 />
            </Box>
          </Box>
          {pricingItems
            .filter((item) => openIndex == null || item.id == openIndex)
            .map((item, index) => (
              <Box
                key={item.id}
                style={{ backgroundColor: item.colorClass }}
                className={`pricing-item ${openIndex ? "open" : ""}`}
                onClick={() => handleClick(item.id)}
              >
                <Box className="pricing-label">
                  <Box
                    className="item-number"
                    style={{ backgroundColor: item.bgColor }}
                  >
                    {`0${item.id}`}
                  </Box>
                  <Box style={{ color: item.bgColor }}>{item.label}</Box>
                </Box>
                <Box className="icon" style={{ color: item.bgColor }}>
                  {hoverdetails == item.id ? (
                    <Box className="HOVERPOP">hello</Box>
                  ) : (
                    ""
                  )}
                  <FiInfo
                    className="info"
                    onMouseEnter={() => handleHoverDetails(item.id)}
                    onMouseLeave={handleHoverDetailsOff}
                  />
                  <FaChevronRight className="ririri" />
                </Box>
              </Box>
            ))}
          {openIndex == 1 ? (
            <Box><Primary /></Box>
          ) : openIndex == 2 ? (
            <Box><Secondary /> </Box>
          ) : openIndex == 3 ? (
            <Box><Secondary /></Box>
          ) : openIndex == 4 ? (
            <Box><Secondary /></Box>
          ) : openIndex == 5 ? (
            <Box><Secondary /></Box>
          ) : openIndex == 6 ? (
            <Box><Secondary /></Box>
          ) : (
            ""
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
