import React from "react";
import "./camp_list.css";
import sampleImage from "/public/bow.jpeg";
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
}) {
  const statusStyle = {
    backgroundColor:
      (status == "Exhausted" && "#FFDEDE") ||
      ("Live now" && "#E1FFE0") ||
      ("Paused" && "#FFF8E0"),
    color:
      (status == "Exhausted" && "#FC3F3F") ||
      ("Live now" && "#317C2E") ||
      ("Paused" && "#D1A307"),
  };

  console.log(status);

  return (
    <div className="c_list">
      {/* checkbox */}
      <input type="checkbox" className="chk" />
      {/* slider */}
      <Switch colorScheme="blue" />
      {/* image and title */}
      <div className="img_title">
        <img className="img" src={sampleImage} alt="thumbnail" />
        <div className="title">
          <p>{title}</p>
          <p className="created">Created on {time_stamp}</p>
        </div>
      </div>

      {/* date range */}
      <p>{date}</p>
      {/* clicks */}
      <p>{clicks}</p>
      {/* budget */}
      <p>{budget}</p>
      {/* location */}
      <p>{location}</p>
      {/* platform */}
      <p>
        {(platform == "facebook" && <BsFacebook color="blue" size="25px" />) ||
          (platform == "youtube" && (
            <AiFillYoutube color="red" size="25px" />
          )) ||
          (platform == "google" && <FcGoogle size="25px" />)}
      </p>
      {/* status */}
      <p className="status" style={statusStyle}>
        {status}
      </p>
      {/* actions */}
      <div className="actions">
        <HiOutlinePencil color="blue" />
        <RiDeleteBin6Line color="red" />
      </div>
    </div>
  );
}

export default Campaign_list;
