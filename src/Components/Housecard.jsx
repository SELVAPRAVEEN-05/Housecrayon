import * as React from "react";
import photo1 from "../assets/house.jpeg";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { GiPersonInBed } from "react-icons/gi";
import { PiBathtubLight } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import MenuButton from "@mui/joy/MenuButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import ListDivider from "@mui/joy/ListDivider";
import { TiPlus } from "react-icons/ti";
import { FaRegTrashCan } from "react-icons/fa6";
import PrincingComponent from "./Popups/Princing";
import AddUtility from "./Popups/Addutils";
import Amenities from "./Popups/Amenities";
import Discount from "./Popups/Discount";
import Remove from "./Popups/Remove";
import { useState } from "react";
import Cardpopup from "./Popups/Cardpopup";

function Housecard() {
  const [showPricingDialog, setShowPricingDialog] = useState(false);
  const [showAmenities, setshowAmenities] = useState(false);
  const [showUtilities, setShowUtilities] = useState(false);
  const [showDiscount, setShowDiscount] = useState(false);
  const [showRemove, setShowRemove] = useState(false);
  const [house, sethouse] = useState(false);
  const properties = [
    {
      id: 1,
      name: "Jumeirah Estate",
      price: "$1,200",
      location: "Jumeirah Golf Estate",
      size: "2000 Sq.Ft",
      beds: 2,
      baths: 2,
      type: "2BHK",
    },

    {
      id: 2,
      name: "Palm Jumeirah Villa",
      price: "$3,500",
      location: "Palm Jumeirah",
      size: "5000 Sq.Ft",
      beds: 4,
      baths: 4,
      type: "4BHK",
    },
    {
      id: 3,
      name: "Dubai Marina ",
      price: "$6,000",
      location: "Dubai Marina",
      size: "7000 Sq.Ft",
      beds: 5,
      baths: 6,
      type: "5BHK",
    },

    {
      id: 4,
      name: "Downtown Apartment",
      price: "$2,200",
      location: "Downtown Dubai",
      size: "1800 Sq.Ft",
      beds: 2,
      baths: 2,
      type: "2BHK",
    },
  ];

  return (
    <Box className="homedetail">
      <Box
        className="QuotationSummary"
        style={{ margin: "0px", marginBottom: "10px", fontSize: "14px" }}
      >
        Unit Details
      </Box>
      <Box className="card">
        <Box className="card-list">
          {properties.map((property) => (
            <Box className="cardo" key={property.id}>
              <Card sx={{ padding: "10px" }}>
                <Box sx={{ position: "relative" }}>
                  <CardMedia component="img" height="100" image={photo1} sx={{borderRadius:'6px'}} onClick={() => sethouse(true)}/>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "0",
                      right: "0",
                      margin: "10px",
                      backgroundColor: "#F5F7FA",
                      display: "flex",
                      padding: "6px",
                      borderRadius: "50px",
                      color: "#FF4B4B",
                    }}
                  >
                    <FaRegTrashCan />
                  </Box>
                </Box>

                <Typography
                  sx={{
                    color: "#091B29",
                    fontSize: "14px",
                    fontWeight: "bold",
                    display: "flex",
                    height: "30px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Box>{property.name}</Box>
                  <Box sx={{ color: "#FF9340" }}>{property.price}</Box>
                </Typography>
                <Typography
                  sx={{
                    color: "#98A0AC",
                    fontSize: "12px",
                    display: "flex",
                    height: "20px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Box>{property.location}</Box>
                  <Box className="dot">
                    <Box className="indot"></Box>
                  </Box>
                  <Box>{property.size}</Box>
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "#98A0AC",
                    fontSize: "14px",
                    display: "flex",
                    height: "40px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Box sx={{ fontSize: "20px" }}>
                    <GiPersonInBed />
                  </Box>
                  <Box>{property.beds}</Box>
                  <Box className="dot">
                    <Box className="indot"></Box>
                  </Box>
                  <Box sx={{ fontSize: "20px" }}>
                    <PiBathtubLight />
                  </Box>
                  <Box>{property.baths}</Box>
                  <Box className="dot">
                    <Box className="indot"></Box>
                  </Box>
                  <Box sx={{ fontSize: "16px" }}>
                    <GoHome />
                  </Box>
                  <Box>{property.type}</Box>
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#98A0AC",
                    fontSize: "12px",
                    display: "flex",
                    height: "30px",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
                  <Box>
                    <Dropdown>
                      <MenuButton
                        size="sm"
                        color="#5078E1"
                        sx={{ color: "#5078E1" }}
                      >
                        <TiPlus />
                        &ensp; Customise
                      </MenuButton>
                      <Menu size="sm">
                        <MenuItem onClick={() => setShowPricingDialog(true)}>
                          Add Pricing Component
                        </MenuItem>
                        <ListDivider />
                        <MenuItem onClick={() => setshowAmenities(true)}>
                          Add Amenities
                        </MenuItem>
                        <ListDivider />
                        <MenuItem onClick={() => setShowUtilities(true)}>
                          Add Utilities
                        </MenuItem>
                        <ListDivider />
                        <MenuItem onClick={() => setShowDiscount(true)}>
                          Add Discount
                        </MenuItem>
                        <ListDivider />
                        <MenuItem onClick={() => setShowRemove(true)}>
                          Remove Component
                        </MenuItem>
                      </Menu>
                    </Dropdown>
                  </Box>
                </Typography>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
      {showPricingDialog && (<PrincingComponent setPrincing={() => setShowPricingDialog(false)} />)}
      {showAmenities && (<Amenities setPrincing={() => setshowAmenities(false)} />)}
      {showUtilities && (<AddUtility setPrincing={() => setShowUtilities(false)} />)}
      {showDiscount && <Discount setPrincing={() => setShowDiscount(false)} />}
      {showRemove && <Remove setPrincing={() => setShowRemove(false)} />}
      {house && <Cardpopup setPrincing={() => sethouse(false)} />}
    </Box>
  );
}

export default Housecard;
