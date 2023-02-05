import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function getResponse(ingredients: string, steps: string) {
  let prompt = generatePrompt(ingredients, steps);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0,
    max_tokens: 7,
  });
  return response.data;
}

function generatePrompt(ingredients: string, steps: string) {
  return `Generate the veganized version of the recipe with these ingredients: ${ingredients} and these steps:${steps}\nGive me the response in  the following JSON format:${JSON.stringify(
    VEGAN_RECIPE_OBJECT
  )}`;
}

export const VEGAN_RECIPE_OBJECT = {
  name: "Recipe Name",
  ingredients: [
    {
      originalIngredient: "Ingredient name",
      substitute: "Substituted ingredient name",
    },
  ],
  steps: ["Step 1", "Step 2", "Step 3"],
};
