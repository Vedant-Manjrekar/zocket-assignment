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
          // icon={<IoCall size="2vw" />}
        />
        <Option
          head="Chocolate truffle cake"
          info="Rs: 2,190"
          // icon={<BiMessageDetail size="2vw" />}
        />
        <Option
          head="Browine cake with fluffy cream"
          info="Rs: 1,222"
          // icon={<IoPersonAddOutline size="2vw" />}
        />
        <Option
          head="Ferro rocher cake"
          info="Rs: 1,234"
          // icon={<FiUsers size="2vw" />}
        />
        <Option
          head="Custurd mixed with fruit cake"
          info="Rs: 2.456"
          // icon={<AiOutlineEye size="2vw" />}
        />
        <Option
          head="Best raw topping choco cake"
          info="Rs: 2,345"
          // icon={<BiPointer size="2vw" />}
        />
        <Option
          head="Green cup cakes"
          info="Rs: 1,234"
          // icon={<MdOutlineStorefront size="2vw" />}
        />
        <Option
          head="Blueberry topping cakes"
          info="Rs: 2,456"
          // icon={<RiInstallLine size="2vw" />}
        />
        <Option
          head="Strawberry cakes with blueberry"
          info="Rs: 2,345"
          // icon={<TbClipboardText size="2vw" />}
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
