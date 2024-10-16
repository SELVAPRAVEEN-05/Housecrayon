import React, { useState } from "react";
import { AppBar, Box, Grid, Toolbar } from "@mui/material";
import Dashboard from "../Pages/Dashboard";
import Header from "../Pages/Header";
import Sidebar from "../Pages/Sidebar";
import ".././Styles/App.css";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded((prevState) => prevState);  //if ! is hear
  };

  return (
    <Box className="overall">
      <Grid container direction="column" sx={{ height: "100%" }}>
        <AppBar position="static" sx={{ height: "8%", bgcolor: "#1c1c1c" }}>
          <Toolbar>
            <Header />
          </Toolbar>
        </AppBar>
        <Grid item container style={{ height: "92%" }}>
          <Grid
            container
            item
            xs={isExpanded ? 1.5 : 0.6}
            style={{
              backgroundColor: "#333333",
              color: "#ffffff",
              alignItems: "end",
            }}
          >
            <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
          </Grid>
          <Grid
            item
            xs={isExpanded ? 10.5 : 11.4}
            style={{ backgroundColor: "rgb(241, 248, 248)" }}
          >
            <Dashboard />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
