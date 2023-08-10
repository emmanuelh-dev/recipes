// ApiContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { GetRecipes } from "@/services/RecipeService"; // Asegúrate de que la ruta sea correcta
const ApiContext = createContext();

export const useApiContext = () => {
  return useContext(ApiContext);
};

export const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const recipesResponse = await GetRecipes("Seafood"); // Espera la respuesta de manera asíncrona
        setData(recipesResponse);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  const apiContextValue = {
    data,
    searchTerm,
    setSearchTerm,
  };

  return (
    <ApiContext.Provider value={apiContextValue}>
      {children}
    </ApiContext.Provider>
  );
};
