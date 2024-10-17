import * as React from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { SlArrowLeft } from "react-icons/sl";
import { FaChevronRight } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import photo from "../assets/image.png";
import photo1 from "../assets/house.jpeg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions"; // Import CardActions
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { GiPersonInBed } from "react-icons/gi";
import { PiBathtubLight } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import MenuButton from "@mui/joy/MenuButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import ListDivider from "@mui/joy/ListDivider";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Check from "@mui/icons-material/Check";
import { TiPlus } from "react-icons/ti";

function Dashboard() {
  const data = {
    totalAmount: { description: "Total Amount", qty: 3, amount: 3600 },
    discount: { description: "Total Discount", percentage: 10, amount: -100 },
    refundable: { description: "Total Refundable", percentage: 0, amount: 0 },
    tax: { description: "Total Tax", percentage: 18, amount: 648 },
    quoteAmount: 4148,
  };

  const properties = [
    
    {
      name: "Jumeirah Estate",
      price: "$1,200",
      location: "Jumeirah Golf Estate",
      size: "2000 Sq.Ft",
      beds: 2,
      baths: 2,
      type: "2BHK",
    },

    

    {
      name: "Jumeirah Estate",
      price: "$1,200",
      location: "Jumeirah Golf Estate",
      size: "2000 Sq.Ft",
      beds: 2,
      baths: 2,
      type: "2BHK",
    },

    {
      name: "Jumeirah Estate",
      price: "$1,200",
      location: "Jumeirah Golf Estate",
      size: "2000 Sq.Ft",
      beds: 2,
      baths: 2,
      type: "2BHK",
    },
    {
      name: "Jumeirah Estate",
      price: "$1,200",
      location: "Jumeirah Golf Estate",
      size: "2000 Sq.Ft",
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
    <div className="Mainbody">
      <div className="dashhead">
        <div className="leftdiv">
          <div className="leftarrow" style={{ fontSize: "1140px" }}>
            <MdOutlineKeyboardArrowLeft />
          </div>
          <div>Create Quotation To Existing Lead</div>
        </div>
        <div>
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
        </div>
      </div>
      <div className="Dashbody">
        <div className="Dashbody1">
          Add Contact&ensp; <FaChevronRight /> &ensp;Lead Details&ensp;
          <FaChevronRight /> &ensp;Preview and Create Lead&ensp;
          <FaChevronRight /> &ensp;Quotation Details&ensp; <FaChevronRight />
          &ensp;Preview and Create
        </div>
        <div className="Dashbody2">
          <div className="TomCruise">
            <div className="LeadDetails">Lead Details</div>
            <div className="profilephoto">
              <div style={{ height: "45px", width: "52px", padding: "0 2%" }}>
                <img src={photo} style={{ height: "100%", width: "100%" }} />
              </div>
              <div className="dashprofil">
                <div className="tom">Tom Cruise</div>

                <div className="s919090808012">
                  <Box>+91 9090808012</Box>
                  <Box className="dot">
                    <Box className="indot"></Box>
                  </Box>
                  <Box>Tomcruise2515@mail.com</Box>
                </div>
              </div>
            </div>
            <div className="line"></div>
            <div className="g-quotation-details">
              <div
                className="QuotationSummary"
                style={{
                  margin: "0px",
                  marginBottom: "15px",
                  fontSize: "14px",
                }}
              >
                Quotation Details
              </div>
              <div className="g-details-row">
                <div className="g-detail">
                  <label>Lease Start Date</label>
                  <p>{leaseStartDate}</p>
                </div>
                <div className="g-detail">
                  <label>Lease End Date</label>
                  <p>{leaseEndDate}</p>
                </div>
                <div className="g-detail">
                  <label>Rent Start Date</label>
                  <p>{rentStartDate}</p>
                </div>
              </div>
              <div className="g-details-row">
                <div className="g-detail">
                  <label>Grace Period</label>
                  <p>{gracePeriod}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="homedetail">
            <div
              className="QuotationSummary"
              style={{ margin: "0px", marginBottom: "10px", fontSize: "14px" }}
            >
              Unit Details
            </div>
            <div className="card">
              <div className="card-list">
                {properties.map((property, index) => (
                  <div >
                    <Card key={index} sx={{ maxWidth: 200, padding: "10px" }}>
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
                            <MenuItem>Add Pricing Component</MenuItem>
                            <ListDivider />
                            <MenuItem>Add Amenities</MenuItem>
                            <ListDivider />
                            <MenuItem>Add Utilities</MenuItem>
                            <ListDivider />
                            <MenuItem>Add Discount</MenuItem>
                            <ListDivider />
                            <MenuItem>Remove Component</MenuItem>
                          </Menu>
                        </Dropdown>
                      </Box>
                    </Typography>
                  </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="payment">
            <div className="QuotationSummary">Quotation Summary</div>
            <div className="Ourways">
              <div className="quotation-summary">
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
              </div>
            </div>
          </div>
        </div>
        <div className="Dashbody3">
          <button className="Buttondash">Previous</button>
          <div className="gap">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
