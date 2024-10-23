import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { useState } from "react";
import Switch from "@mui/joy/Switch";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { GrHome } from "react-icons/gr";
import photo from "../../assets/house.jpeg";

const utilitiesData = [
  {
    name: "Utility name 1",
    price: "$20.00",
    validity: "Valid Feb 22 - 12 Feb 23",
    image: photo,
    checked: false,
  },
  {
    name: "Utility name 2",
    price: "$20.00",
    validity: "Valid Feb 22 - 12 Feb 23",
    image: photo,
    checked: false,
  },
  {
    name: "Utility name 3",
    price: "$20.00",
    validity: "Valid Feb 22 - 12 Feb 23",
    image: photo,
    checked: false,
  },
  {
    name: "Utility name 1",
    price: "$20.00",
    validity: "Valid Feb 22 - 12 Feb 23",
    image: photo,
    checked: false,
  },
  {
    name: "Utility name 2",
    price: "$20.00",
    validity: "Valid Feb 22 - 12 Feb 23",
    image: photo,
    checked: false,
  },
  {
    name: "Utility name 3",
    price: "$20.00",
    validity: "Valid Feb 22 - 12 Feb 23",
    image: photo,
    checked: false,
  },
  {
    name: "Utility name 1",
    price: "$20.00",
    validity: "Valid Feb 22 - 12 Feb 23",
    image: photo,
    checked: false,
  },
  {
    name: "Utility name 2",
    price: "$20.00",
    validity: "Valid Feb 22 - 12 Feb 23",
    image: photo,
    checked: false,
  },
  {
    name: "Utility name 3",
    price: "$20.00",
    validity: "Valid Feb 22 - 12 Feb 23",
    image: photo,
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
        <Box className="mainover">
          <Box
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
          </Box>
          <Box className="line" style={{ margin: "15px 0" }}></Box>
          <Box
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
            <Box style={{ display: "flex", gap: "20px" }}>
              <Box
                style={{
                  fontSize:'20px'
                }}
              >
                <GrHome />
              </Box>
              <Box>05 Total Amenities</Box>
            </Box>
            <Box>
              <h4>$200.00</h4>
            </Box>
          </Box>

          <Box className="lrtter">Available Amenitiesy</Box>
          <Box
            style={{
              overflowY: "scroll",
              scrollbarWidth: "none",
              height: "70%",
            }}
          >
            {utilities.map((utility, index) => (
              <Box
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  height: "45px",
                  padding: "8px",
                  justifyContent: "space-between",
                  borderRadius: "8px",
                  border: "1px solid #E0E0E0",
                }}
              >
                <Box
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
                      marginRight: "10px",
                    }}
                  />
                  <Box
                    style={{
                      height: "90%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Box style={{ fontWeight: "600" }}>{utility.name}</Box>
                    <Box style={{ color: "#808080", fontSize: "12px" }}>
                      {utility.price} &ensp; {utility.validity}
                    </Box>
                  </Box>
                </Box>
                <Switch
                  checked={utility.checked} // Each switch's checked state
                  onChange={() => handleToggle(index)} // Toggle individual switch
                />
              </Box>
            ))}
          </Box>
          <Box style={{ padding: "16px", textAlign: "center" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClose}
              fullWidth
            >
              Update & Save
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
