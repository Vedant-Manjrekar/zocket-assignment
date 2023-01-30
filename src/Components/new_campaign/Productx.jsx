import { Button } from "@chakra-ui/react";
import React from "react";
import Option from "./Option";

function Productx() {
  return (
    <>
      <div className="options">
        <Option
          head="Bluberry cake with raw toppings"
          info="Rs: 2,290"
          icon="/prods1.png"
          clicks={false}
        />
        <Option
          head="Chocolate truffle cake"
          info="Rs: 2,190"
          icon="/prods2.png"
          clicks={false}
        />
        <Option
          head="Browine cake with fluffy cream"
          info="Rs: 1,222"
          icon="/prods3.png"
          clicks={false}
        />
        <Option head="Ferro rocher cake" info="Rs: 1,234" icon="/prods8.png" />
        <Option
          head="Custurd mixed with fruit cake"
          info="Rs: 2.456"
          icon="/prods4.png"
          clicks={false}
        />
        <Option
          head="Best raw topping choco cake"
          info="Rs: 2,345"
          icon="/prods5.png"
          clicks={false}
        />
        <Option head="Green cup cakes" info="Rs: 1,234" icon="/prods9.png" />
        <Option
          head="Blueberry topping cakes"
          info="Rs: 2,456"
          icon="/prods6.png"
          clicks={false}
        />
        <Option
          head="Strawberry cakes with blueberry"
          info="Rs: 2,345"
          icon="/prods7.png"
          clicks={false}
        />
      </div>
      <Button
        backgroundColor="#0F6EFF"
        color="white"
        className="continue_btn"
        w="15vw"
        position="absolute"
        bottom="-4rem"
        right="0vw"
      >
        Continue
      </Button>
    </>
  );
}

export default Productx;
