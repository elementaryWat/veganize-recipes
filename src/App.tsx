import React from "react";
import "./App.css";
import { Grid } from "@mui/material";
import RecipeStepper from "./components/Stepper/Stepper";

function App() {
  return (
    <div className="background">
      <div className="blur">
        <Grid
          container
          flexDirection="column"
          height="100vh"
          flex={1}
          alignItems="center"
          justifyContent="center"
        >
          <RecipeStepper />
        </Grid>
      </div>
    </div>
  );
}

export default App;
