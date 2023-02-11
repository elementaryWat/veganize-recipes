import React, { ReactElement, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, TextField } from "@mui/material";
// import { getResponse } from "./config";

const steps = [
  "Enter the ingredients of the recipe",
  "Enter the steps of the recipe",
  "Veganize the recipe",
];

export default function RecipeStepper() {
  const [ingredients, setIngredients] = useState("");
  const [stepsRecipe, setStepsRecipe] = useState("");
  //   const [veganizedRecipe, setVeganizedRecipe] = useState<string>("null");
  const [activeStep, setActiveStep] = React.useState(0);

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  //   async function handleSubmit() {
  //     const res = await getResponse(ingredients, steps);
  //     setVeganizedRecipe(res);
  //   }

  const STEPS_INPUT: { [key: number]: ReactElement } = {
    0: (
      <TextField
        fullWidth
        multiline
        label="Ingredients"
        value={ingredients}
        maxRows={6}
        onChange={(event) => setIngredients(event.target.value)}
      />
    ),
    1: (
      <TextField
        fullWidth
        multiline
        label="Recipe"
        value={stepsRecipe}
        maxRows={6}
        onChange={(event) => setStepsRecipe(event.target.value)}
      />
    ),
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Grid p={2} width="100%" flex={1} container flexDirection="column">
      <Typography variant="h5" textAlign="center">
        Veganizer
      </Typography>
      <Grid mt={2} container flex={1} flexDirection="column">
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <Grid
            container
            flex={1}
            height="100%"
            flexDirection="column"
            justifyContent="space-between"
          >
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
                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}
