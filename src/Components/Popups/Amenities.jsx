import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { useState } from "react";
import Switch from "@mui/joy/Switch";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/material";
import { HiSparkles } from "react-icons/hi2";
import { ImHome3 } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
import { GrHome } from "react-icons/gr";

// Add a checked property to each utility
const utilitiesData = [
  {
    name: "Utility name 1",
    price: "$20.00",
    validity: "Valid Feb 22 - 12 Feb 23",
    image: "https://via.placeholder.com/50",
    checked: false,
  },
  {
    name: "Utility name 2",
    price: "$20.00",
    validity: "Valid Feb 22 - 12 Feb 23",
    image: "https://via.placeholder.com/50",
    checked: false,
  },
  {
    name: "Utility name 3",
    price: "$20.00",
    validity: "Valid Feb 22 - 12 Feb 23",
    image: "https://via.placeholder.com/50",
    checked: false,
  },
  {
    name: "Utility name 1",
    price: "$20.00",
    validity: "Valid Feb 22 - 12 Feb 23",
    image: "https://via.placeholder.com/50",
    checked: false,
  },
  {
    name: "Utility name 2",
    price: "$20.00",
    validity: "Valid Feb 22 - 12 Feb 23",
    image: "https://via.placeholder.com/50",
    checked: false,
  },
  {
    name: "Utility name 3",
    price: "$20.00",
    validity: "Valid Feb 22 - 12 Feb 23",
    image: "https://via.placeholder.com/50",
    checked: false,
  },
  {
    name: "Utility name 1",
    price: "$20.00",
    validity: "Valid Feb 22 - 12 Feb 23",
    image: "https://via.placeholder.com/50",
    checked: false,
  },
  {
    name: "Utility name 2",
    price: "$20.00",
    validity: "Valid Feb 22 - 12 Feb 23",
    image: "https://via.placeholder.com/50",
    checked: false,
  },
  {
    name: "Utility name 3",
    price: "$20.00",
    validity: "Valid Feb 22 - 12 Feb 23",
    image: "https://via.placeholder.com/50",
    checked: false,
  },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Amenities({ setPrincing }) {
  const [open, setOpen] = useState(true);
  const [utilities, setUtilities] = useState(utilitiesData); // State to manage utilities

  const handleClose = () => {
    setOpen(false);
    setPrincing(false);
  };

  // Function to toggle the checked state of each utility
  const handleToggle = (index) => {
    const updatedUtilities = utilities.map((utility, i) =>
      i === index ? { ...utility, checked: !utility.checked } : utility
    );
    setUtilities(updatedUtilities); // Update the state with the modified utilities
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
        "& .MuiPaper-root": {
          width: "432px",
          height: "690px",
        },
      }}
    >
      <DialogContent>
        <div className="mainover">
          <div
            style={{
              color: "#091B29",
              fontWeight: "600",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box>Add Amenities</Box>
            <Box onClick={handleClose} style={{ cursor: "pointer" }}>
              <RxCross2 />
            </Box>
          </div>
          <div className="line" style={{ margin: "15px 0" }}></div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#FEEAEA80",
              color: "#B3776D",
              height: "60px",
              alignItems: "center",
              padding: "0 20px",
              fontWeight: "bold",
            }}
          >
            <div style={{ display: "flex", gap: "20px" }}>
              <div
                style={{
                  fontSize:'20px'
                }}
              >
                <GrHome />
              </div>
              <div>05 Total Amenities</div>
            </div>
            <div>
              <h4>$200.00</h4>
            </div>
          </div>

          <div className="lrtter">Available Amenitiesy</div>
          <div
            style={{
              overflowY: "scroll",
              scrollbarWidth: "none",
              height: "70%",
            }}
          >
            {utilities.map((utility, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  height: "50px",
                  padding: "10px 15px",
                  justifyContent: "space-between",
                  borderRadius: "8px",
                  border: "1px solid #E0E0E0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    height: "100%",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={utility.image}
                    alt={utility.name}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "8px",
                      marginRight: "20px",
                    }}
                  />
                  <div
                    style={{
                      height: "80%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div style={{ fontWeight: "600" }}>{utility.name}</div>
                    <div style={{ color: "#808080", fontSize: "12px" }}>
                      {utility.price} &ensp; {utility.validity}
                    </div>
                  </div>
                </div>
                <Switch
                  checked={utility.checked} // Each switch's checked state
                  onChange={() => handleToggle(index)} // Toggle individual switch
                />
              </div>
            ))}
          </div>
          <div style={{ padding: "16px", textAlign: "center" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClose}
              fullWidth
            >
              Update & Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
