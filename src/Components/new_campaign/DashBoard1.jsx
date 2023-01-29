import React, { useState } from "react";
import "./new_camp.css";
import { Divider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

function DashBoard1({ step_no, stage_name, data }) {
  const [step, setStep] = useState(
    JSON.parse(localStorage.getItem("progress"))
  );

  function progress() {
    let old_progress = JSON.parse(localStorage.getItem("progress"));
    setStep(old_progress);
    if (old_progress >= 3) {
      return;
    }

    localStorage.setItem("progress", old_progress + 1);
    const event = new Event("storage");
    dispatchEvent(event);
  }

  return (
    <div className="choose_product">
      <div className="header">
        <div className="s_name">{stage_name}</div>
        &nbsp;
        <div className="step_no">(Step {step_no} of 4)</div>
      </div>
      <Divider orientation="horizontal" w="95%" margin="auto" />
      <div className="dynamic_part">{data}</div>
      <Button
        backgroundColor="#0F6EFF"
        color="white"
        className="continue_btn"
        w="15vw"
        position="absolute"
        bottom="-4rem"
        right="0vw"
        onClick={progress}
      >
        {step < 3 ? "Continue" : "Start campaign"}
      </Button>
    </div>
  );
}

export default DashBoard1;
