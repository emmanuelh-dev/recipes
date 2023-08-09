// services/RecipeService.js
import axios from "./axiosConfig";

export const GetRecipes = async (cuisine) => {
  const options = {
    method: "GET",
    url: "/filter.php",
    params: {
      c: cuisine,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.meals;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
