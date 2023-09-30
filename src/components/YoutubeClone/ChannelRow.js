import { Verified } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./Assets/ChannelRow.scss"
function ChannelRow({
  image,
  channel,
  verified,
  subs,
  noOfVideos,
  description,
}) {
  return (
    <div className="ChannelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div className="channelRow__text">
        <h4>{channel} {verified && <Verified />}</h4>
        <p>{subs} subscribe * {noOfVideos} videos</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
