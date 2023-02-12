import React, { ReactElement, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CircularProgress, Grid, TextField } from "@mui/material";
import { createImage, getResponse, RECETA_VEGANA } from "../../config";
import VeganRecipe from "../VeganRecipe/VeganRecipe";
import { CreateCompletionResponse } from "openai";

const steps = [
  "Enter the title of the recipe",
  "Enter the ingredients of the recipe",
  "Enter the steps of the recipe",
];

export default function RecipeStepper() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [ingredients, setIngredients] = useState("");
  const [stepsRecipe, setStepsRecipe] = useState("");
  const [veganizedRecipe, setVeganizedRecipe] = useState<RECETA_VEGANA | null>(
    null
  );
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === steps.length - 1) {
      handleSubmit();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  async function handleSubmit() {
    setLoading(true);
    const res = await getResponse(ingredients, stepsRecipe);
    const url = await createImage(res.nombre);
    setImageUrl(url as string);
    setVeganizedRecipe(res);
    setLoading(false);
  }

  const STEPS_INPUT: { [key: number]: ReactElement } = {
    0: (
      <TextField
        fullWidth
        label="Title"
        value={title}
        maxRows={10}
        onChange={(event) => setTitle(event.target.value)}
      />
    ),
    1: (
      <TextField
        fullWidth
        multiline
        label="Ingredients"
        value={ingredients}
        maxRows={10}
        onChange={(event) => setIngredients(event.target.value)}
      />
    ),
    2: (
      <TextField
        fullWidth
        multiline
        label="Recipe"
        value={stepsRecipe}
        maxRows={10}
        onChange={(event) => setStepsRecipe(event.target.value)}
      />
    ),
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Grid
      zIndex={1}
      p={2}
      width="100%"
      flex={1}
      container
      flexDirection="column"
    >
      <Grid mt={2} container flex={1} flexDirection="column">
        {activeStep === steps.length ? (
          <Grid container height="100%" flexDirection="column">
            {veganizedRecipe !== null && !loading ? (
              <VeganRecipe imgUrl={imageUrl} recipe={veganizedRecipe} />
            ) : (
              <CircularProgress />
            )}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </Grid>
        ) : (
          <Grid container flex={1} height="100%" flexDirection="column">
            <Typography variant="h4" textAlign="center" color="white">
              Veganizer
            </Typography>
            <Grid
              container
              flex={1}
              flexDirection="column"
              justifyContent="space-between"
            >
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps: { completed?: boolean } = {};
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              <Grid container p={2} justifyContent="center" alignItems="center">
                {STEPS_INPUT[activeStep]}
              </Grid>
              <Grid
                container
                pt={2}
                width="100%"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Grid>
                  <Button onClick={handleNext} color="secondary">
                    {activeStep === steps.length - 1 ? "Veganize" : "Next"}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}
