import React, { useState } from "react";
import "./App.css";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { CreateCompletionResponse } from "openai";
import { getResponse } from "./config";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState<CreateCompletionResponse | null>(
    null
  );

  async function handleSubmit() {
    const res = await getResponse(prompt);
    setResponse(res);
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
        label="Prompt"
        value={prompt}
        onChange={(event) => setPrompt(event.target.value)}
      />
      <Button onClick={handleSubmit}>Submit</Button>
      {response === null ? (
        <p>No response yet</p>
      ) : (
        <div>
          <p>Response: {response.choices[0].text}</p>
        </div>
      )}
    </Grid>
  );
}

export default App;
