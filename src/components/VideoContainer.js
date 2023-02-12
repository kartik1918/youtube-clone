import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const res = await fetch(YOUTUBE_API);
    const data = await res.json();
    console.log(data);
    setVideos(data.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link to={`/watch?v=${video.id}`}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
