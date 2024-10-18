import * as React from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { FaChevronRight } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import photo from "../assets/image.png";
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
import PrincingComponent from "../Components/Popups/Princing";
import { useState } from "react";
import AddUtility from "../Components/Popups/Addutils";
import Amenities from "../Components/Popups/Amenities";
import Discount from "../Components/Popups/Discount";
import Remove from "../Components/Popups/Remove";

function Dashboard() {
  const [showPricingDialog, setShowPricingDialog] = useState(false);
  const [showAmenities, setshowAmenities] = useState(false);
  const [showUtilities, setShowUtilities] = useState(false);
  const [showDiscount, setShowDiscount] = useState(false);
  const [showRemove, setShowRemove] = useState(false);

  const handleOpen1 = () => {
    setShowPricingDialog(true);
  };

  const handleClose1 = () => {
    setShowPricingDialog(false);
  };

  const handleOpen2 = () => {
    setshowAmenities(true);
  };

  const handleClose2 = () => {
    setshowAmenities(false);
  };

  const handleOpen3 = () => {
    setShowUtilities(true);
  };

  const handleClose3 = () => {
    setShowUtilities(false);
  };

  const handleOpen4 = () => {
    setShowDiscount(true);
  };

  const handleClose4 = () => {
    setShowDiscount(false);
  };

  const handleOpen5 = () => {
    setShowRemove(true);
  };

  const handleClose5 = () => {
    setShowRemove(false);
  };

  const data = {
    totalAmount: { description: "Total Amount", qty: 3, amount: 3600 },
    discount: { description: "Total Discount", percentage: 10, amount: -100 },
    refundable: { description: "Total Refundable", percentage: 0, amount: 0 },
    tax: { description: "Total Tax", percentage: 18, amount: 648 },
    quoteAmount: 4148,
  };

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

  const leaseStartDate = "30 Jan 22";
  const leaseEndDate = "30 Jan 23";
  const rentStartDate = "30 Jan 23";
  const gracePeriod = "90 Days (Beginning)";

  return (
    <Box className="Mainbody">
      <Box className="dashhead">
        <Box className="leftdiv">
          <Box className="leftarrow" style={{ fontSize: "1140px" }}>
            <MdOutlineKeyboardArrowLeft />
          </Box>
          <Box>Create Quotation To Existing Lead</Box>
        </Box>
        <Box>
          <Select
            placeholder="Casagrand"
            indicator={<KeyboardArrowDown />}
            sx={{
              width: 200,
              [`& .${selectClasses.indicator}`]: {
                transition: "0.2s",
                [`&.${selectClasses.expanded}`]: {
                  transform: "rotate(-180deg)",
                },
              },
            }}
          >
            <Option value="dog">Casagrand</Option>
            <Option value="cat">Casagrand</Option>
            <Option value="fish">Casagrand</Option>
            <Option value="bird">Casagrand</Option>
          </Select>
        </Box>
      </Box>
      <Box className="Dashbody">
        <Box className="Dashbody1">
          Add Contact&ensp; <FaChevronRight /> &ensp;Lead Details&ensp;
          <FaChevronRight /> &ensp;Preview and Create Lead&ensp;
          <FaChevronRight /> &ensp;Quotation Details&ensp; <FaChevronRight />
          &ensp;Preview and Create
        </Box>
        <Box className="Dashbody2">
          <Box className="TomCruise">
            <Box className="LeadDetails">Lead Details</Box>
            <Box className="profilephoto">
              <Box style={{ height: "45px", width: "52px", padding: "0 2%" }}>
                <img src={photo} style={{ height: "100%", width: "100%" }} />
              </Box>
              <Box className="dashprofil">
                <Box className="tom">Tom Cruise</Box>

                <Box className="s919090808012">
                  <Box>+91 9090808012</Box>
                  <Box className="dot">
                    <Box className="indot"></Box>
                  </Box>
                  <Box>Tomcruise2515@mail.com</Box>
                </Box>
              </Box>
            </Box>
            <Box className="line"></Box>
            <Box className="g-quotation-details">
              <Box
                className="QuotationSummary"
                style={{
                  margin: "0px",
                  marginBottom: "15px",
                  fontSize: "14px",
                }}
              >
                Quotation Details
              </Box>
              <Box className="g-details-row">
                <Box className="g-detail">
                  <label>Lease Start Date</label>
                  <p>{leaseStartDate}</p>
                </Box>
                <Box className="g-detail">
                  <label>Lease End Date</label>
                  <p>{leaseEndDate}</p>
                </Box>
                <Box className="g-detail">
                  <label>Rent Start Date</label>
                  <p>{rentStartDate}</p>
                </Box>
              </Box>
              <Box className="g-details-row">
                <Box className="g-detail">
                  <label>Grace Period</label>
                  <p>{gracePeriod}</p>
                </Box>
              </Box>
            </Box>
          </Box>

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
                  <Box key={property.id}>
                    <Card sx={{ maxWidth: 200, padding: "10px" }}>
                      <CardMedia component="img" height="100" image={photo1} />
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
                        component="div"
                      >
                        <Box>{property.name}</Box>
                        <Box>{property.price}</Box>
                      </Typography>
                      <Typography
                        variant="body2"
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
                              <MenuItem onClick={handleOpen1}>
                                Add Pricing Component
                              </MenuItem>
                              <ListDivider/>
                              <MenuItem  onClick={handleOpen2}>Add Amenities</MenuItem>
                              <ListDivider />
                              <MenuItem onClick={handleOpen3}>
                                Add Utilities
                              </MenuItem>
                              <ListDivider />
                              <MenuItem onClick={handleOpen4}>Add Discount</MenuItem>
                              <ListDivider />
                              <MenuItem onClick={handleOpen5}>Remove Component</MenuItem>
                            </Menu>
                          </Dropdown>
                        </Box>
                      </Typography>
                    </Card>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          <Box className="payment">
            <Box className="QuotationSummary">Quotation Summary</Box>
            <Box className="Ourways">
              <Box className="quotation-summary">
                <table>
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>QTY</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{data.totalAmount.description}</td>
                      <td>{data.totalAmount.qty}</td>
                      <td>${data.totalAmount.amount.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td>{data.discount.description}</td>
                      <td>{data.discount.percentage}%</td>
                      <td>- ${Math.abs(data.discount.amount).toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td>{data.refundable.description}</td>
                      <td>{data.refundable.percentage}%</td>
                      <td>${data.refundable.amount.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td>{data.tax.description}</td>
                      <td>{data.tax.percentage}%</td>
                      <td>${data.tax.amount.toFixed(2)}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="2">
                        <strong>Quote Amount</strong>
                      </td>
                      <td>
                        <strong>${data.quoteAmount.toFixed(2)}</strong>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="Dashbody3">
          <button className="Buttondash">Previous</button>
          <Box className="gap">
            <button className="Buttondash">Cancel</button>
            <button
              className="Buttondash"
              style={{
                backgroundColor: "#5078E1",
                color: "#ffffff",
                border: "none",
              }}
            >
              Create Quotation
            </button>
          </Box>
        </Box>
      </Box>
      {showPricingDialog && <PrincingComponent setPrincing={handleClose1} />}
      {showUtilities && <AddUtility setPrincing={handleClose3} />}
      {showAmenities && <Amenities setPrincing={handleClose2} />}
      {showDiscount && <Discount setPrincing={handleClose4} />}
      {showRemove && <Remove setPrincing={handleClose5} />}
    </Box>
  );
}

export default Dashboard;
