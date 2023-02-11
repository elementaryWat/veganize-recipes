import React from "react";
import "./App.css";
import { Grid } from "@mui/material";
import RecipeStepper from "./components/Stepper/Stepper";

function App() {
  return (
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
  );
}

export default App;
