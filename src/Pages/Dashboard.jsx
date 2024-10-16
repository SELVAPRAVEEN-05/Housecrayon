import * as React from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { SlArrowLeft } from "react-icons/sl";
import { FaChevronRight } from "react-icons/fa";

function Dashboard() {
  return (
    <div className="Mainbody">
      <div className="dashhead">
        <div className="leftdiv">
          <div className="leftarrow">
            <SlArrowLeft />
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
            <div className="Dashbody1">Add Contact&ensp; <FaChevronRight /> &ensp;Lead Details&ensp; <FaChevronRight /> &ensp;Preview and Create Lead&ensp; <FaChevronRight /> &ensp;Quotation Details&ensp; <FaChevronRight /> &ensp;Preview and Create</div>
            <div className="Dashbody2">
              <div className="TomCruise">
                <div className="LeadDetails">Lead Details</div>
              </div>
              <div className="homedetail">2</div>
              <div className="payment">3</div>
            </div>
            <div className="Dashbody3">
              <button className="Buttondash">Previous</button>
              <div className="gap">
              <button className="Buttondash">Cancel</button>
              <button className="Buttondash" style={{backgroundColor:'#5078E1',color:'#ffffff',border:'none'}}>Create Quotation</button>
              </div>
            </div>
      </div>
    </div>
  );
}

export default Dashboard;
