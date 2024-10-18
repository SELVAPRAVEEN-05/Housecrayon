import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { useState } from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Discount({ setPrincing }) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    setPrincing(false);
  };

  const [bills, setBills] = useState([
    { name: 'Bill Name Here', amount: 1000, discount: 0 },
    { name: 'Bill Name Here', amount: 1000, discount: 0 },
    { name: 'Bill Name Here', amount: 1000, discount: 0 },
    { name: 'Utility Name Here', amount: 1000, discount: 0 },
    { name: 'Amenity Name Here', amount: 1000, discount: 0 },
  ]);

  const handleDiscountChange = (index, value) => {
    const newBills = [...bills];
    newBills[index].discount = value ? parseFloat(value) : 0;
    setBills(newBills);
  };

  const calculateTotal = () => {
    return bills.reduce((total, bill) => total + bill.amount - bill.discount, 0);
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
        <div style={{ maxWidth: '400px', margin: 'auto' }}>
          <h2>UNIT PRICE DETAIL</h2>
          {bills.map((bill, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>{bill.name}</span>
                <span>${bill.amount.toFixed(2)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
                <input
                  type="number"
                  placeholder="Discount"
                  value={bill.discount}
                  onChange={(e) => handleDiscountChange(index, e.target.value)}
                  style={{ flex: '1', marginRight: '10px' }}
                />
                <span>AED</span>
              </div>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
            <strong>Final Total</strong>
            <strong>${calculateTotal().toFixed(2)}</strong>
          </div>
          <button style={{ marginTop: '20px', width: '100%', padding: '10px', backgroundColor: '#4A90E2', color: '#fff', border: 'none', borderRadius: '5px' }}>
            Apply Discount
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
