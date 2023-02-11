import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function getResponse(ingredients: string, steps: string) {
  // let prompt = generatePrompt(ingredients, steps);
  // const response = await openai.createCompletion({
  //   model: "text-davinci-003",
  //   prompt: prompt,
  //   temperature: 0,
  //   max_tokens: 7,
  // });
  // return response.data;
  let replacements = JSON.stringify(INGREDIENTES_VEGANOS);
  return generatePromptRecipe(replacements, steps);
}

function generatePrompt(ingredients: string) {
  return `Eres un chef profesional. Dame los sustitutos veganos de estos ingredientes. Solo sustituye los que no son veganos: ${ingredients} .\nDame la respuesta en el siguiente formato JSON:${JSON.stringify(
    FORMATO_INGREDIENTES
  )}`;
}

function generatePromptRecipe(ingredients: string, steps: string) {
  return `Dame la versión vegana de esta receta: ${steps}. Usa este objeto para reemplazar los ingredientes.: ${ingredients} \n. Dame la respuesta en el siguiente formato JSON:${JSON.stringify(
    FORMATO_RECETA_VEGANA
  )}`;
}

export const FORMATO_INGREDIENTES = {
  ingredientes: [
    {
      ingredienteOriginal: "Nombre del ingrediente",
      sustituto: "Nombre del ingrediente sustituido",
    },
  ],
};
export const INGREDIENTES_VEGANOS = {
  ingredientes: [
    {
      ingredienteOriginal: "queso panela",
      sustituto: "queso vegano de almendra o nuez",
    },
    { ingredienteOriginal: "tomatillos", sustituto: "tomatillos" },
    { ingredienteOriginal: "pepino", sustituto: "pepino" },
    { ingredienteOriginal: "aguacate", sustituto: "aguacate" },
    { ingredienteOriginal: "cilantro", sustituto: "cilantro" },
    { ingredienteOriginal: "chile serrano", sustituto: "chile serrano" },
    { ingredienteOriginal: "cebolla morada", sustituto: "cebolla morada" },
    { ingredienteOriginal: "limones", sustituto: "limones" },
    { ingredienteOriginal: "aceite de oliva", sustituto: "aceite de oliva" },
    { ingredienteOriginal: "sal", sustituto: "sal" },
    {
      ingredienteOriginal: "pimienta al gusto",
      sustituto: "pimienta al gusto",
    },
    { ingredienteOriginal: "orégano", sustituto: "orégano" },
  ],
};

export const FORMATO_RECETA_VEGANA = {
  nombre: "Nombre de la receta",
  ingredientes: ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
  pasos: ["Paso 1", "Paso 2", "Paso 3"],
};
