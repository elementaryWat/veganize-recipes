import React from "react";
import { Grid, styled, Typography } from "@mui/material";
import { RECETA_VEGANA } from "../../config";
import Description from "./Description";

interface Props {
  imgUrl: string;
  recipe: RECETA_VEGANA;
}

const VeganRecipe: React.FC<Props> = ({ imgUrl, recipe }) => {
  return (
    <Grid container flex={1}>
      <Grid container alignItems="center" flexDirection="column">
        <Typography textAlign="center" variant="h4">
          {recipe.nombre}
        </Typography>
        <img height="300vh" src={imgUrl} alt={recipe.nombre} />
      </Grid>
      <Grid container xs={12} height="auto" overflow="scroll">
        <Description ingredients={recipe.ingredientes} steps={recipe.pasos} />
      </Grid>
    </Grid>
  );
};

export default VeganRecipe;
