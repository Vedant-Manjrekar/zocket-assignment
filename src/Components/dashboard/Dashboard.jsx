import React from "react";
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
import { Link } from "react-router-dom";

function Dashboard() {
  function create() {
    localStorage.setItem("progress", 0);
    dispatchEvent(new Event("storage"));
  }

  return (
    <div className="dashboard">
      <div className="title_and_create">
        {/* title */}
        <div className="title_main">
          <h2>Your Campaigns</h2>
          <p>Check the list of campigns you created</p>
        </div>
        {/* create button */}
        <Link to="/create-campaign" onClick={create}>
          <Button backgroundColor="#0F6EFF" color="white">
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
              platform="youtube"
              title="Car decoration"
              status="Exhausted"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
