import { Divider, Typography } from "@mui/material";
import { videos } from "../data/videos";
import { FaPlayCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState } from "react";
import VideoModal from "./VideoModal";

const Videos = () => {
  const videoList = videos;
  const [playedVideo, setPlayedVideo] = useState(false);
  const [url, setUrl] = useState("");

  const closeModal = () => {
    setPlayedVideo(false);
  };

  return (
    <div>
      {videoList.map((video) => (
        <div key={video.title}>
          <div className="img-flex">
            <img
              src={video.thumbnail}
              alt={video.title}
              width="200px"
              height="120px"
              style={{ margin: "1rem", objectFit: "cover" }}
            />
            <div className="icon-align">
              <IconContext.Provider value={{ color: "#59A6A2", size: "40px" }}>
                <FaPlayCircle
                  style={{ cursor: "pointer", margin: "0.5rem" }}
                  onClick={() => {
                    setPlayedVideo(true);
                    setUrl(video.url);
                  }}
                ></FaPlayCircle>
              </IconContext.Provider>
            </div>
            <div className="video-title-align">
              <Typography
                variant="h5"
                style={{ textAlign: "left", color: "#256069" }}
              >
                {video.title}
              </Typography>
            </div>
          </div>
          <Divider></Divider>
        </div>
      ))}
      <VideoModal isOpen={playedVideo} onClose={closeModal} url={url}></VideoModal>
    </div>
  );
};

export default Videos;
