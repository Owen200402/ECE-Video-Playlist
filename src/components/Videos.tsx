import { Divider, Typography, Button, Grid } from "@mui/material";
import { videos } from "../data/videos";
import { FaPlayCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState, useEffect } from "react";
import VideoModal from "./VideoModal";

const Videos = () => {
  const [playedVideo, setPlayedVideo] = useState(false);
  const [url, setUrl] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage, setVideosPerPage] = useState(5);

  const calculateVideosPerPage = () => {
    const viewportHeight = window.innerHeight;
    const videoHeight = 200; // Approximate height of each video item including margin/padding
    const containerPadding = 100; // Padding and additional space within the container
    const availableHeight = viewportHeight - containerPadding;
    const calculatedVideosPerPage = Math.floor(availableHeight / videoHeight) - 2;

    // Ensure the number of videos per page is between 4 and 5
    const minVideosPerPage = 4;
    const maxVideosPerPage = 5;
    const adjustedVideosPerPage = Math.max(minVideosPerPage, Math.min(maxVideosPerPage, calculatedVideosPerPage));
    setVideosPerPage(adjustedVideosPerPage);
  };

  useEffect(() => {
    calculateVideosPerPage();
    window.addEventListener("resize", calculateVideosPerPage);
    return () => window.removeEventListener("resize", calculateVideosPerPage);
  }, []);

  const closeModal = () => setPlayedVideo(false);

  const handleClickNext = () => setCurrentPage((prevPage) => prevPage + 1);

  const handleClickPrev = () => setCurrentPage((prevPage) => prevPage - 1);

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  const totalPages = Math.ceil(videos.length / videosPerPage);

  return (
    <div
      style={{
        width: "950px",
        height: `${(videosPerPage) * 150 + 75}px`, // Dynamically set height based on videos per page
        margin: "auto", // Center horizontally
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)", // Center vertically and horizontally
        backgroundColor: "#f9f9f9",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden", // Prevent scrolling
      }}
    >
      <div style={{ flex: 1, overflowY: "hidden" }}>
        {currentVideos.map((video) => (
          <div
            key={video.title}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
              padding: "10px",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              transition: "box-shadow 0.3s ease",
            }}
            onClick={() => {
              setPlayedVideo(true);
              setUrl(video.url);
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0px 6px 15px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
            }}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              width="200px"
              height="120px"
              style={{ marginRight: "1rem", objectFit: "cover", borderRadius: "8px" }}
            />
            <div style={{ flexGrow: 1 }}>
              <Typography variant="h5" style={{ textAlign: "left", color: "#256069" }}>
                {video.title}
              </Typography>
            </div>
            <IconContext.Provider value={{ color: "#59A6A2", size: "40px" }}>
              <FaPlayCircle />
            </IconContext.Provider>
          </div>
        ))}
      </div>
      <Divider />
      <Grid container justifyContent="space-between" alignItems="center" style={{ marginTop: "1rem" }}>
        <Button
          variant="contained"
          color="primary"
          disabled={currentPage === 1}
          onClick={handleClickPrev}
          style={{ width: "120px" }}
        >
          Previous
        </Button>
        <Typography variant="body1">
          Page {currentPage} of {totalPages}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          disabled={currentPage === totalPages}
          onClick={handleClickNext}
          style={{ width: "120px" }}
        >
          Next
        </Button>
      </Grid>
      <VideoModal isOpen={playedVideo} onClose={closeModal} url={url} />
    </div>
  );
};

export default Videos;
