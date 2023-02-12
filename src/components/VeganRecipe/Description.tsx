import React from "react";
import { Grid, Typography } from "@mui/material";

interface Props {
  ingredients: string[];
  steps: string[];
}

const Description: React.FC<Props> = ({ ingredients, steps }) => {
  return (
    <Grid container>
      <Grid container flexDirection="column" xs={12} md={6}>
        <Typography variant="h5">Ingredientes</Typography>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </Grid>
      <Grid container flexDirection="column" xs={12} md={6}>
        <Typography variant="h5">Pasos</Typography>
        <ul>
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
};

export default Description;
