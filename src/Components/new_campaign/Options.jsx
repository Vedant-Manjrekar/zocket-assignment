import React from "react";
import Option from "./Option";
import { IoCall } from "react-icons/io5";
import { BiMessageDetail } from "react-icons/bi";
import { IoPersonAddOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { BiPointer } from "react-icons/bi";
import { MdOutlineStorefront } from "react-icons/md";
import { RiInstallLine } from "react-icons/ri";
import { TbClipboardText } from "react-icons/tb";
import { Button } from "@chakra-ui/react";

function Options() {
  return (
    <>
      <div className="options">
        <Option
          head="Get Leads as calls"
          info="Reach broad audience and get leads through calls"
          icon={<IoCall size="2vw" />}
        />
        <Option
          head="Get Leads as Facebook messages"
          info="Get more FB messages from Leads"
          icon={<BiMessageDetail size="2vw" />}
        />
        <Option
          head="Increase page followers"
          info="Encourage customers to follow your page"
          icon={<IoPersonAddOutline size="2vw" />}
        />
        <Option
          head="Get Customer Leads"
          info="Encourage customers to take action"
          icon={<FiUsers size="2vw" />}
        />
        <Option
          head="Get more youtube views"
          info="Increase organic views by obtaining user attention"
          icon={<AiOutlineEye size="2vw" />}
        />
        <Option
          head="Get more website traffic"
          info="Get the right people to visit your website"
          icon={<BiPointer size="2vw" />}
        />
        <Option
          head="Increase Live store traffic"
          info="Drive visits to local stores, restaurants & Dealerships"
          icon={<MdOutlineStorefront size="2vw" />}
        />
        <Option
          head="Increase your App installs"
          info="Get more installs, interactions for your app"
          icon={<RiInstallLine size="2vw" />}
        />
        <Option
          head="Increase the catalogue sales"
          info="Drive the sales of your catalogue and get more leads"
          icon={<TbClipboardText size="2vw" />}
        />
      </div>
    </>
  );
}

export default Options;
