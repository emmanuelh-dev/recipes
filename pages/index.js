import React from "react";
import { useApiContext } from "../context/ApiContext";
import { Grid, Container } from "@mui/material";
import RecipeCard from "@/components/RecipeCard";

function Index() {
  const { data, searchTerm } = useApiContext(); // Obtén el valor de búsqueda del contexto

  let filteredData = data; // Inicialmente, muestra todos los datos

  if (searchTerm) {
    // Si hay un valor de búsqueda, filtra los datos
    filteredData = data.filter(item =>
      item.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (!data) {
    // Manejar el caso cuando los datos aún no están disponibles
    return <div>Loading...</div>;
  }

  return (
    <Container >
      <Grid container spacing={2}>
        {filteredData.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.idMeal}>
            <RecipeCard item={item}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Index;
