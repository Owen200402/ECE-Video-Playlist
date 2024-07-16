import { Divider, Typography } from "@mui/material";
import { videos } from "../data/videos";

const Videos = () => {
  const videoList = videos;

  return (
    <div>
      {videoList.map((video) => (
        <div key={video.title}>
          <div className="img-flex">
            <img
              src={video.thumbnail}
              alt={video.title}
              width="150px"
              height="100px"
              style={{ margin: "2rem" }}
            />
            <div className="video-title-align"><Typography variant="h5" style={{textAlign: "center", color: "#002145"}}>{video.title}</Typography></div>
          </div>
          <Divider></Divider>
        </div>
      ))}
    </div>
  );
};

export default Videos;
