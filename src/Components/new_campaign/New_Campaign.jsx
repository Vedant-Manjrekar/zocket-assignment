import React, { useEffect, useState } from "react";
import DashBoard1 from "./DashBoard1";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { BsFillBasket2Fill } from "react-icons/bs";
import { BsCalendarWeekFill } from "react-icons/bs";
import { BsCheckCircleFill } from "react-icons/bs";
import "./new_camp.css";
import Options from "./Options";
import Productx from "./Productx";
import Campaign_Settings from "./Campaign_Settings";
import Ready2Go from "./Ready2Go";

function New_Campaign() {
  const [progress, setProgress] = useState(
    JSON.parse(localStorage.getItem("progress"))
  );
  console.warn(progress);

  function addStyles(number) {
    document.getElementById(`stage-${number}`).style.backgroundColor =
      "#F29A2E";
    document.getElementById(`line-${number}`).style.backgroundColor = "#F29A2E";
  }

  useEffect(() => {
    if (progress == 0) {
      addStyles(1);
    }
    if (progress == 1) {
      addStyles(1);
      addStyles(2);
    }
    if (progress == 2) {
      addStyles(1);
      addStyles(2);
      addStyles(3);
    }
    if (progress == 3) {
      addStyles(1);
      addStyles(2);
      addStyles(3);
      document.getElementById(`stage-4`).style.backgroundColor = "#F29A2E";
    }
  }, []);

  window.addEventListener("storage", () => {
    setProgress(JSON.parse(localStorage.getItem("progress")));
    if (progress == 0) {
      addStyles(1);
    }
    if (progress == 1) {
      addStyles(1);
      addStyles(2);
    }
    if (progress == 2) {
      addStyles(1);
      addStyles(2);
      addStyles(3);
    }
    if (progress == 3) {
      addStyles(1);
      addStyles(2);
      addStyles(3);
      document.getElementById(`stage-4`).style.backgroundColor = "#F29A2E";
    }
  });

  return (
    <div className="new_camp">
      <div className="title_main">
        <h2>Your Ad Campaign</h2>
        <p>Launch your ad in just 4 easy steps</p>
      </div>

      <div className="stages">
        <div className="lines">
          <div className="line" id="line-1"></div>
          <div className="line" id="line-2"></div>
          <div className="line" id="line-3"></div>
        </div>
        {/* What you want to do */}
        <div className="stage_name">
          <div className="stage" id="stage-1">
            <RiLightbulbFlashFill size="2.5vw" color="white" />
          </div>
          <p>What you want to do</p>
        </div>
        {/* Choose product */}
        <div className="stage_name">
          <div className="stage" id="stage-2">
            <BsFillBasket2Fill size="2.5vw" color="white" />
          </div>
          <p>Choose product</p>
        </div>
        {/* Campaign settings */}
        <div className="stage_name">
          <div className="stage" id="stage-3">
            <BsCalendarWeekFill size="2.5vw" color="white" />
          </div>
          <p>Campaign settings</p>
        </div>
        {/* Ready to go */}
        <div className="stage_name">
          <div className="stage" id="stage-4">
            <BsCheckCircleFill size="2.5vw" color="white" />
          </div>
          <p>Ready to go </p>
        </div>
      </div>
      {(progress == 0 && (
        <DashBoard1
          step_no="1"
          stage_name="What you want to do"
          data={<Options />}
        />
      )) ||
        (progress == 1 && (
          <DashBoard1
            step_no="2"
            stage_name="Choose the product"
            data={<Productx />}
          />
        )) ||
        (progress == 2 && (
          <DashBoard1
            step_no="3"
            stage_name="Campaign Settings"
            data={<Campaign_Settings />}
          />
        )) ||
        (progress == 3 && (
          <DashBoard1
            step_no="4"
            stage_name="Ready to go"
            data={<Ready2Go />}
          />
        ))}
    </div>
  );
}

export default New_Campaign;
