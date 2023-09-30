import React from "react";
import { Avatar } from "@mui/material";
import "./Assets/VideoCard.scss";
function VideoCard({ title, views, timestamp, channelImage, channel, image }) {
  return (
    <div className="videoCards">
      <img className="videocard__thumbnail" src={image} alt="" />
      <div className="videocard__info">
        <Avatar
          className="videocard__avatar"
          alt={channel}
          src={channelImage}
        />
         <div className="videocard__text">
        <h4>{title}</h4>
        <p>{channel}</p>
        <p>
          {views} * {timestamp}
        </p>
      </div>
      </div>
     
    </div>
  );
}

export default VideoCard;
