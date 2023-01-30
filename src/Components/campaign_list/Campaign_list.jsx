import React from "react";
import "./camp_list.css";
import { HiOutlinePencil } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillYoutube } from "react-icons/ai";
import { Switch } from "@chakra-ui/react";

function Campaign_list({
  date,
  clicks,
  title,
  budget,
  location,
  platform,
  status,
  time_stamp,
  img,
}) {
  // styles for status.
  const statusStyle = {
    backgroundColor:
      (status == "Exhausted" && "#FFDEDE") ||
      (status == "Live now" && "#E1FFE0") ||
      (status == "Paused" && "#FFF8E0"),
    color:
      (status == "Exhausted" && "#FC3F3F") ||
      (status == "Live now" && "#317C2E") ||
      (status == "Paused" && "#D1A307"),
  };

  return (
    <div className="c_list">
      {/* checkbox */}
      <input type="checkbox" className="chk" />
      {/* slider */}
      <Switch colorScheme="blue" />
      {/* image and title */}
      <div className="img_title">
        <img className="img" src={img} alt="thumbnail" />
        <div className="title">
          <p>{title}</p>
          <p className="created">Created on {time_stamp}</p>
        </div>
      </div>

      {/* date range */}
      <p>{date}</p>

      {/* clicks */}
      <p className="clicks">{clicks}</p>

      {/* budget */}
      <p className="budget">{budget}</p>

      {/* location */}
      <p className="budget"> {location}</p>

      {/* platform */}
      <p className="budget">
        {(platform == "facebook" && <BsFacebook color="blue" size="25px" />) ||
          (platform == "youtube" && (
            <AiFillYoutube color="red" size="25px" />
          )) ||
          (platform == "google" && <FcGoogle size="25px" />)}
      </p>

      {/* status */}
      <p className="status budget" style={statusStyle}>
        {status}
      </p>

      {/* actions */}
      <div className="actions budget">
        <HiOutlinePencil color="blue" className="action" />
        <RiDeleteBin6Line color="red" className="action" />
      </div>
    </div>
  );
}

export default Campaign_list;
