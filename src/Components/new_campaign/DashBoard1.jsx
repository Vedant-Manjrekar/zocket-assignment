import React, { useState } from "react";
import "./new_camp.css";
import { Divider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

function DashBoard1({ step_no, stage_name, data }) {
  // state to store progress.
  const [step, setStep] = useState(
    JSON.parse(localStorage.getItem("progress"))
  );

  // function to update progress.
  function progress() {
    let old_progress = JSON.parse(localStorage.getItem("progress"));

    // if progress is greater or equal to 3, terminate.
    if (old_progress >= 3) {
      return;
    }

    // update progress.
    setStep(old_progress + 1);

    // update localstorage.
    localStorage.setItem("progress", old_progress + 1);

    // dispatching storage event.
    const event = new Event("storage");
    dispatchEvent(event);
  }

  return (
    // base body.
    <div className="choose_product">
      <div className="header">
        <div className="s_name">{stage_name}</div>
        &nbsp;
        <div className="step_no">(Step {step_no} of 4)</div>
      </div>

      <Divider orientation="horizontal" w="95%" margin="auto" />

      {/* Dynamic part */}
      <div className="dynamic_part">{data}</div>

      {/* Continue / Start campaign button */}
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
