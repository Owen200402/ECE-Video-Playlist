import { Grid, Typography } from "@mui/material";
import "./App.css";
import Videos from "./components/Videos";

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={2} lg={2} xl={2}></Grid>

      <Grid item xs={12} sm={8} lg={8} xl={8}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "100vh",
            position: "relative", // Ensure that the footer is relative to this container
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              width: "100%",
              position: "sticky",
              top: 0,
              zIndex: 10,
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          >
            <Typography
              variant="h3"
              style={{
                textAlign: "center",
                fontFamily: "American Typewriter, serif",
                color: "#256070",
                margin: "0",
              }}
            >
              ECE Intro Videos Playlist
            </Typography>
          </div>

          <Videos />

          <Typography
            variant="body2"
            style={{
              textAlign: "center",
              fontFamily: "cursive",
              color: "#256070",
              position: "fixed", // Fix the footer to the bottom of the viewport
              bottom: 0,
              left: 0,
              width: "100%",
              backgroundColor: "#f9f9f9", // Ensure it matches the page background
              padding: "1rem 0", // Add padding for better visual spacing
              zIndex: 10,
            }}
          >
            &copy; {new Date().getFullYear()} UBC Electrical and Computer
            Engineering. All rights reserved.
          </Typography>
        </div>
      </Grid>

      <Grid item xs={12} sm={2} lg={2} xl={2}></Grid>
    </Grid>
  );
}

export default App;
