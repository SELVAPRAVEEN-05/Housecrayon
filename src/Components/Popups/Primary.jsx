import React from "react";
import LinearProgress from "@mui/material/LinearProgress"; 
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import { MenuItem, Select, Box } from "@mui/material";
import { FaChevronDown } from "react-icons/fa";

function Primary() {
  const [activeTab1, setActiveTab1] = useState("Lease");
  const [act11, setact11] = useState("Amount");
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const categories1 = ["Lease", "Sales", "Manage"];
  const Chargeble1 = ["Amount", "UOM"];

  return (
    <Box>
      <Box className="category-tabs">
        <Box className="col">
          <Box>Revenue Type</Box>
          <Box className="category-tabs">
            {categories1.map((category) => (
              <button
                key={category}
                className={activeTab1 === category ? "active" : ""}
                onClick={() => setActiveTab1(category)}
              >
                {category}
              </button>
            ))}
          </Box>
        </Box>
        <Box className="col">
          <Box>Pricing Component</Box>
          <Box>
            <FormControl size="small">
              <Select
                value={selectedValue}
                onChange={handleChange}
                displayEmpty
                IconComponent={FaChevronDown}
                className="pricing-buttons-gst"
                sx={{
                  height: "40px",
                  fontSize: "14px",
                  width: "210px",
                  fontWeight: "bold",
                  marginTop: "10px",
                  borderRadius: "4px",
                  backgroundColor: "#ffffff",
                  ".MuiSvgIcon-root": {
                    color: "#091B29",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #E4E8EE",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #E4E8EE",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #E4E8EE",
                  },
                }}
              >
                <MenuItem  value="" disabled>
                  <Box sx={{color:'#091B29'}}>Pricing Component</Box>
                </MenuItem>
                <MenuItem value={10}>GST 1</MenuItem>
                <MenuItem value={20}>GST 2</MenuItem>
                <MenuItem value={30}>GST 3</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <Box className="category-tabs">
        <Box className="col">
          <Box>Tax Group For Pricing Component</Box>
          <Box>
            <FormControl size="small">
              <Select
                value={selectedValue}
                onChange={handleChange}
                displayEmpty
                IconComponent={FaChevronDown}
                className="pricing-buttons-gst"
                sx={{
                  height: "40px",
                  fontSize: "14px",
                  width: "210px",
                  fontWeight: "bold",
                  marginTop: "10px",
                  borderRadius: "4px",
                  backgroundColor: "#ffffff",
                  ".MuiSvgIcon-root": {
                    color: "#091B29",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #E4E8EE",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #E4E8EE",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "1px solid #E4E8EE",
                  },
                }}
              >
                <MenuItem value="" disabled>
                  GST
                </MenuItem>
                <MenuItem value={10}>GST 1</MenuItem>
                <MenuItem value={20}>GST 2</MenuItem>
                <MenuItem value={30}>GST 3</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box className="col">
          <Box>Component Based On</Box>
          <Box className="category-tabs">
            {Chargeble1.map((category) => (
              <button
                key={category}
                className={act11 === category ? "active" : ""}
                onClick={() => setact11(category)}
              >
                {category}
              </button>
            ))}
          </Box>
        </Box>
      </Box>
      <Box className="pricing-bottom-top">UOM value</Box>
      <Box className="pricing-bottom-input">
        <Box sx={{ fontSize: "14px", color: "#091B29", fontWeight: "600" }}>
          200
        </Box>
        <Box sx={{ color: "#98A0AC" }}>SAR / Total</Box>
      </Box>
      <Box className="rating-buttons-main">
        <Box className="ratings-button">
          <Box>Maximum</Box>
          <Box sx={{ width: "100%", margin: "10px 0" }}>
            <LinearProgress
              variant="determinate"
              value={100}
              sx={{
                backgroundColor: "#E4E8EE",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#FF4B4B",
                  borderRadius: "10px",
                },
                borderRadius: "10px",
              }}
            />
          </Box>

          <Box className="ratings-rate">$ 190</Box>
          <Box sx={{ fontSize: "10px" }}>Sq. Yard/Monthly</Box>
        </Box>
        <Box className="ratings-button">
          <Box>Recommended</Box>
          <Box sx={{ width: "100%", margin: "10px 0" }}>
            <LinearProgress
              variant="determinate"
              value={40}
              sx={{
                backgroundColor: "#E4E8EE",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#5AC782",
                  borderRadius: "10px",
                },
                borderRadius: "10px",
              }}
            />
          </Box>

          <Box className="ratings-rate">$ 120</Box>
          <Box sx={{ fontSize: "10px" }}>Sq. Yard/Monthly</Box>
        </Box>
        <Box className="ratings-button">
          <Box>Minimum</Box>
          <Box sx={{ width: "100%", margin: "10px 0" }}>
            <LinearProgress
              variant="determinate"
              value={20}
              sx={{
                backgroundColor: "#E4E8EE",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#FF9340",
                  borderRadius: "10px",
                },
                borderRadius: "10px",
              }}
            />
          </Box>

          <Box className="ratings-rate">$ 100</Box>
          <Box sx={{ fontSize: "10px" }}>Sq. Yard/Monthly</Box>
        </Box>
      </Box>
      <Box className="pricing-main-buttons">
        <button className="pricing-button-back">Back</button>
        <button className="pricing-button-create">
          Create Pricing Component
        </button>
      </Box>
    </Box>
  );
}

export default Primary;
