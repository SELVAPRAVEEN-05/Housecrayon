import { Box } from "@mui/material";
import React from "react";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Routere() {
  return (
    <Box>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default Routere;
