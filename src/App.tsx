import { Grid, Typography } from "@mui/material";
import "./App.css";
import Videos from "./components/Videos";

function App() {
  return (
    <div className="big-wrapper">
      <Grid container spacing={2}>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
          <div>
            <Typography variant="h3" margin={2} style={{textAlign: "center"}}>
              ECE Faculty Playlist
            </Typography>
            <Videos></Videos>
          </div>
        </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
