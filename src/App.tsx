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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            marginTop={10}
            style={{
              textAlign: "center",
              fontFamily: "American Typewriter, serif",
              color: "#256070",
            }}
          >
            ECE Faculty Playlist
          </Typography>
          <Videos />
          <div
            style={{
              backgroundColor: "#bae4f5",
              position: "fixed",
              width: "100%",
              height: "50px",
              bottom: "0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h5"
              style={{
                textAlign: "center",
                color: "white",
                fontFamily: "American Typewriter, serif",
              }}
            >
              Scroll to See More
            </Typography>
          </div>
          <Typography
            variant="body2"
            margin={4}
            style={{
              textAlign: "center",
              fontFamily: "cursive",
              color: "#256070",
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
