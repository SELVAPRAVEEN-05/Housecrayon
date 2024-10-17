import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { useState } from "react";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

// Utility data (sample, can be replaced with dynamic data)
const utilities = [
  {
    name: "Utility name",
    price: "$20.00",
    validity: "Valid Feb 22 - 12 Feb 23",
    image: "https://via.placeholder.com/50", // Replace with actual images
  },
  {
    name: "Utility name",
    price: "$20.00",
    validity: "Valid Feb 22 - 12 Feb 23",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Utility name",
    price: "$20.00",
    validity: "Valid Feb 22 - 12 Feb 23",
    image: "https://via.placeholder.com/50",
  },
  // Add more utilities as needed
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddUtility({ setPrincing }) {
  const [open, setOpen] = useState(true);
  const [selectedUtilities, setSelectedUtilities] = useState([]);

  const handleClose = () => {
    setOpen(false);
    setPrincing(false);
  };

  const handleToggle = (name) => {
    setSelectedUtilities((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
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
          width: "484px",
          height: "550px",
        },
      }}
    >
      <DialogContent>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "16px",
            backgroundColor: "#F0F8F8",
            borderBottom: "1px solid #E0E0E0",
          }}
        >
          <div>
            <h4>05 Total Utility</h4>
          </div>
          <div>
            <h4>$200.00</h4>
          </div>
        </div>

        {/* Utility List */}
        <div style={{ padding: "16px", flex: 1, overflowY: "auto" }}>
          <h5>Available Utility</h5>
          {utilities.map((utility, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #E0E0E0",
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
              <div style={{ flexGrow: 1 }}>
                <div>{utility.name}</div>
                <div style={{ color: "#808080", fontSize: "12px" }}>
                  {utility.price} • {utility.validity}
                </div>
              </div>
              <Switch
                checked={selectedUtilities.includes(utility.name)}
                onChange={() => handleToggle(utility.name)}
              />
            </div>
          ))}
        </div>

        {/* Update & Save Button */}
        <Divider />
        <div style={{ padding: "16px", textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              // Handle update logic here
              console.log("Selected utilities:", selectedUtilities);
              handleClose();
            }}
            fullWidth
          >
            Update & Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
