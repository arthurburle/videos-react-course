import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect3 }) => {
  return (
    <div onClick={() => onVideoSelect3(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
