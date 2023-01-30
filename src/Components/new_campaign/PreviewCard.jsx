import { Button } from "@chakra-ui/react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import React, { useState } from "react";

function PreviewCard({ logo, title, info, img }) {
  const [click, setClick] = useState(false);

  const cardStyle = {
    border: click ? "1px solid #0F6EFF" : "1px solid #f3f3f3",
  };

  const tickStyle = {
    display: click ? "flex" : "none",
  };

  const buttonStyle = {
    display: click ? "flex" : "none",
  };

  return (
    <div className="preview_card" style={cardStyle}>
      <div className="prev_tick" style={tickStyle}>
        <BsFillCheckCircleFill color="#0f6eff" className="tck" />
      </div>

      <div className="logo_title">
        <img src={logo} alt="" className="prev_logo" />
        <p className="prev_title">
          <div className="ttl">{title}</div>
          <div className="spnsr">Sponsored</div>
        </p>
      </div>

      <div className="info_image" onClick={() => setClick(!click)}>
        <p className="prev_info">{info}</p>
        <img src={img} alt="" className="prev_img" />
      </div>
      <div className="like">
        <p>{title}</p>
        <button>
          <img src="/thumb.png" alt="" />
          Like
        </button>
      </div>

      <div className="buttons" style={buttonStyle}>
        <Button
          color={"#0f6eff"}
          border="1px solid #0f6eff"
          w={"9vw"}
          fontSize="12px"
          variant="outline"
          bgColor={"#E7F0FF"}
        >
          Change Image
        </Button>

        <Button
          color={"#0f6eff"}
          bgColor={"#E7F0FF"}
          w={"9vw"}
          fontSize="12px"
          border="1px solid #0f6eff"
          variant="outline"
        >
          Edit Text
        </Button>
      </div>
    </div>
  );
}

export default PreviewCard;
