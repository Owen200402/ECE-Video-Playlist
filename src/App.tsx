import { Grid, Typography } from "@mui/material";
import "./App.css";
import Videos from "./components/Videos";

function App() {
  return (
    <div className="big-wrapper zoom-container">
      <Grid container spacing={2}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <div>
            <Typography
              variant="h3"
              margin={4}
              style={{
                textAlign: "center",
                fontFamily: "American Typewriter, serif",
                color: "#002145",
              }}
            >
              ECE Faculty Playlist
            </Typography>
            <Videos></Videos>
            <Typography
              variant="body2"
              margin={4}
              style={{
                textAlign: "center",
                fontFamily: "cursive",
                color: "#002145",
              }}
            >
              &copy; {new Date().getFullYear()} UBC Electrical and Computer
              Engineering. All rights reserved.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
}

export default App;
