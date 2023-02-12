import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function getResponse(ingredients: string, steps: string) {
  // let prompt = generatePromptRecipe(ingredients, steps);
  // const response = await openai.createCompletion({
  //   model: "text-davinci-003",
  //   prompt: prompt,
  //   temperature: 0,
  //   max_tokens: 2500,
  // });
  // return response.data;
  return RECETA_VEGANA;
}

export async function createImage(description: string) {
  const response = await openai.createImage({
    prompt: description,
    n: 1,
    size: "1024x1024",
  });
  return response.data.data[0].url;
}

// function generatePrompt(ingredients: string) {
//   return `Eres un chef profesional. Dame los sustitutos veganos de estos ingredientes. Solo sustituye los que no son veganos: ${ingredients} .\nDame la respuesta en el siguiente formato JSON:${JSON.stringify(
//     FORMATO_INGREDIENTES
//   )}`;
// }

function generatePromptRecipe(ingredients: string, steps: string) {
  return `Dame la versión vegana de esta receta: ${steps} con estos ingredientes: ${ingredients}. Dame la respuesta en el siguiente formato JSON:${JSON.stringify(
    FORMATO_RECETA_VEGANA
  )}`;
}

export const RECETA_VEGANA = {
  nombre: "Pechugas de pollo con brócoli",
  ingredientes: [
    "300 gramos de queso panela",
    "3 piezas de tomatillos o tomate verde",
    "1 pieza de pepino",
    "1 pizca de aguacate",
    "1 rama de cilantro",
    "1 pizca de chile serrano",
    "½ pieza de cebolla morada",
    "6 limones",
    "2 cucharadas soperas de aceite de oliva",
    "sal y pimienta al gusto",
    "1 pizca de orégano",
  ],
  pasos: [
    "Corta en cubos pequeños el queso panela",
    "Pica la cebolla morada, puede ser en cubos o en julianas",
    "Pela y retira semillas al pepino",
    "Cuando tengas todos los ingredientes picados, es momento de integrar para armar el ceviche de queso panela",
    "Mezcla todo muy bien para que se integre y todo se bañe un poco con el aderezo",
  ],
};
// export const INGREDIENTES_VEGANOS = {
//   ingredientes: [
//     {
//       ingredienteOriginal: "queso panela",
//       sustituto: "queso vegano de almendra o nuez",
//     },
//     { ingredienteOriginal: "tomatillos", sustituto: "tomatillos" },
//     { ingredienteOriginal: "pepino", sustituto: "pepino" },
//     { ingredienteOriginal: "aguacate", sustituto: "aguacate" },
//     { ingredienteOriginal: "cilantro", sustituto: "cilantro" },
//     { ingredienteOriginal: "chile serrano", sustituto: "chile serrano" },
//     { ingredienteOriginal: "cebolla morada", sustituto: "cebolla morada" },
//     { ingredienteOriginal: "limones", sustituto: "limones" },
//     { ingredienteOriginal: "aceite de oliva", sustituto: "aceite de oliva" },
//     { ingredienteOriginal: "sal", sustituto: "sal" },
//     {
//       ingredienteOriginal: "pimienta al gusto",
//       sustituto: "pimienta al gusto",
//     },
//     { ingredienteOriginal: "orégano", sustituto: "orégano" },
//   ],
// };
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
