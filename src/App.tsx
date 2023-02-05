import React, { useState } from "react";
import "./App.css";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { CreateCompletionResponse } from "openai";
import { getResponse } from "./config";

function App() {
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [veganizedRecipe, setVeganizedRecipe] =
    useState<CreateCompletionResponse | null>(null);

  async function handleSubmit() {
    const res = await getResponse(ingredients, steps);
    setVeganizedRecipe(res);
  }

  return (
    <Grid
      container
      flexDirection="column"
      height="100vh"
      flex={1}
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Veganizer
      </Typography>
      <TextField
        multiline
        label="Ingredients"
        value={ingredients}
        onChange={(event) => setIngredients(event.target.value)}
      />
      <TextField
        multiline
        label="Recipe"
        value={steps}
        onChange={(event) => setSteps(event.target.value)}
      />
      <Button onClick={handleSubmit}>Submit</Button>
      {veganizedRecipe === null ? (
        <p>No response yet</p>
      ) : (
        <div>
          <p>Response: {veganizedRecipe.choices[0].text}</p>
        </div>
      )}
    </Grid>
  );
}

export default App;
