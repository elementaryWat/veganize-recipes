import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function getResponse(ingredients: string, steps: string) {
  let prompt = generatePromptRecipe(ingredients, steps);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0,
    max_tokens: 2500,
  });
  return JSON.parse(response.data.choices[0].text as string) as RECETA_VEGANA;
}

export async function createImage(description: string) {
  const response = await openai.createImage({
    prompt: description,
    n: 1,
    size: "1024x1024",
  });
  return response.data.data[0].url;
}

function generatePromptRecipe(ingredients: string, steps: string) {
  return `Eres un chef profesional. Dame la versión vegana de esta receta: ${steps} con estos ingredientes: ${ingredients}. Dame la respuesta en el siguiente formato JSON:${JSON.stringify(
    FORMATO_RECETA_VEGANA
  )}`;
}

export type RECETA_VEGANA = {
  nombre: string;
  ingredientes: string[];
  pasos: string[];
};

export const FORMATO_RECETA_VEGANA: RECETA_VEGANA = {
  nombre: "Nombre de la receta",
  ingredientes: ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
  pasos: ["Paso 1", "Paso 2", "Paso 3"],
};
