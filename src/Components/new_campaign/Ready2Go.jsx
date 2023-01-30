import React from "react";
import PreviewCard from "./PreviewCard";

function Ready2Go() {
  return (
    <div className="ready2go">
      <PreviewCard
        title={"Mukund Cake Shop"}
        info={
          "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts"
        }
        logo={"/mukund.png"}
        img={"/prev1.png"}
      />
      <PreviewCard
        title={"Mukund Cake Shop"}
        info={
          "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts"
        }
        logo={"/mukund.png"}
        img={"/prev2.png"}
      />
      <PreviewCard
        title={"Mukund Cake Shop"}
        info={
          "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts"
        }
        logo={"/mukund.png"}
        img={"/prev3.png"}
      />
      <PreviewCard
        title={"Mukund Cake Shop"}
        info={
          "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts"
        }
        logo={"/mukund.png"}
        img={"/prev4.png"}
      />
    </div>
  );
}

export default Ready2Go;
