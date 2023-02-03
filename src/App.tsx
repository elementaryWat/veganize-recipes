import React, { useEffect, useState } from "react";
import "./App.css";
import { getResponse } from "./config";
import { CreateCompletionResponse } from "openai";

function App() {
  const [response, setResponse] = useState<CreateCompletionResponse>();

  useEffect(() => {
    async function fetchData() {
      const res = await getResponse();
      setResponse(res);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <p>Response: {response?.choices[0].text}</p>
      </div>
    </div>
  );
}

export default App;
