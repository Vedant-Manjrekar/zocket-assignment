import React from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "./dashboard.css";
import {
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
} from "@chakra-ui/react";
import Campaign_list from "../campaign_list/Campaign_list";
import camp1 from "/public/camp1.png";
import camp2 from "/public/camp2.png";
import camp3 from "/public/camp3.png";
import camp4 from "/public/camp4.png";
import camp5 from "/public/camp5.png";

function Dashboard() {
  function create() {
    console.log("clicked");
    localStorage.setItem("progress", 0);
    const event = new Event("storage");
    dispatchEvent(event);
  }

  return (
    <div className="dashboard1">
      <div className="title_and_create">
        {/* title */}
        <div className="title_main">
          <h2>Your Campaigns</h2>
          <p>Check the list of campigns you created</p>
        </div>
        {/* create button */}
        <Link to="/create-campaign">
          <Button
            backgroundColor="#0F6EFF"
            color="white"
            onClick={create}
            margin="0 3rem"
          >
            <img src="/public/add-circle.png" className="add_cirlce" alt="" />
            Create new campaign
          </Button>
        </Link>
      </div>

      <div className="controller">
        {/* settings */}
        <div className="settings">
          {/* search */}
          <InputGroup>
            <InputLeftAddon
              children={<BsSearch />}
              backgroundColor="transparent"
              borderRightStyle="none"
            />
            <Input
              placeholder="Search for campaign"
              borderLeftStyle="none"
              w="20vw"
            />
          </InputGroup>
          <div className="blank"></div>
          {/* platform */}
          <p>Platform</p>
          <Select placeholder="All platform" w="10vw">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          {/* Status */}
          <p>Status</p>
          <Select placeholder="All Status" w="10vw">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select placeholder="Last 30 days" w="10vw">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </div>

        {/* campaigns */}
        <div className="campaigns">
          <div className="labels">
            {/* on/off */}
            <input type="checkbox" className="chk" />
            <p>on/off</p>
            {/* campaign */}
            <p>Campaign</p>
            {/* date range */}
            <p>Date Range</p>
            {/* clicks */}
            <p>Clicks</p>
            {/* budget */}
            <p>Budget</p>
            {/* location */}
            <p>Location</p>
            {/* platform */}
            <p>Platform</p>
            {/* status */}
            <p>Status</p>
            {/* actions */}
            <p>Actions</p>
          </div>
          <div className="campaign_list">
            {/* campaign component */}
            <Campaign_list
              date="25 jul 2020 - 01 Aug 2020"
              clicks="300"
              budget="INR.3,400"
              location="Chennai"
              platform="facebook"
              title="Bluberry cake Campaign"
              img={camp1}
              status="Live now"
            />
            <Campaign_list
              date="25 jul 2020 - 01 Aug 2020"
              clicks="300"
              budget="INR.3,400"
              location="Coimbatore"
              platform="facebook"
              title="Chocolate cake campaign"
              status="Paused"
              img={camp2}
            />
            <Campaign_list
              date="25 jul 2020 - 01 Aug 2020"
              clicks="300"
              budget="INR.3,400"
              location="Erode"
              platform="facebook"
              title="Browine cake campaign"
              status="Exhausted"
              img={camp3}
            />
            <Campaign_list
              date="25 jul 2020 - 01 Aug 2020"
              clicks="300"
              budget="INR.3,400"
              location="Coimbatore"
              platform="youtube"
              title="Pumpkin cake camapign"
              status="Live now"
              img={camp4}
            />
            <Campaign_list
              date="25 jul 2020 - 01 Aug 2020"
              clicks="300"
              budget="INR.3,400"
              location="Coimbatore"
              platform="google"
              title="Cup cakes campaign"
              status="Live now"
              img={camp5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
