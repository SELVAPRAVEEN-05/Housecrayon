import * as React from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { FaChevronRight } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import photo from "../assets/image.png";
import { Box } from "@mui/material";
import Housecard from "../Components/Housecard";

function Dashboard() {
  const data = {
    totalAmount: { description: "Total Amount", qty: 3, amount: 3600 },
    discount: { description: "Total Discount", percentage: 10, amount: -100 },
    refundable: { description: "Total Refundable", percentage: 0, amount: 0 },
    tax: { description: "Total Tax", percentage: 18, amount: 648 },
    quoteAmount: 4148,
  };

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
                <img
                  src={photo}
                  style={{ height: "100%", width: "100%", borderRadius: "5px" }}
                />
              </Box>
              <Box className="dashprofil">
                <Box className="tom">
                  Tom Cruise <span className="Prospect">Prospect</span>
                </Box>

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
                  <Box className="bocs">30 Jan 22</Box>
                </Box>
                <Box className="g-detail">
                  <label>Lease End Date</label>
                  <Box className="bocs">30 Jan 23</Box>
                </Box>
                <Box className="g-detail">
                  <label>Rent Start Date</label>
                  <Box className="bocs">30 Jan 23</Box>
                </Box>
              </Box>
              <Box className="g-details-row">
                <Box className="g-detail">
                  <label>Grace Period</label>
                  <Box className="bocs">
                    90 Days{" "}
                    <span style={{ color: "#98a0ac" }}>(Beginning)</span>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Housecard />

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
                      <td
                        style={{
                          color: "#091B29",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        ${data.totalAmount.amount.toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <td>{data.discount.description}</td>
                      <td>{data.discount.percentage}%</td>
                      <td>- ${Math.abs(data.discount.amount).toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td>{data.refundable.description}</td>
                      <td>{data.refundable.percentage}%</td>
                      <td
                        style={{
                          color: "#091B29",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        ${data.refundable.amount.toFixed(2)}
                      </td>
                    </tr>
                    <tr>
                      <td>{data.tax.description}</td>
                      <td>{data.tax.percentage}%</td>
                      <td
                        style={{
                          color: "#091B29",
                          fontSize: "14px",
                          fontWeight: "bold",
                        }}
                      >
                        ${data.tax.amount.toFixed(2)}
                      </td>
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
    </Box>
  );
}

export default Dashboard;
