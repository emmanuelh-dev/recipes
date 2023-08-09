import React from "react";
import { useApiContext } from "../context/ApiContext";
import { Card, CardContent, CardMedia, Typography, Grid, Container } from "@mui/material";
import RecipeCard from "@/components/RecipeCard";
import Layout from "@/Layout/Layout";

function MyComponent() {
  const { data } = useApiContext();

  if (!data) {
    // Manejar el caso cuando los datos aún no están disponibles
    return <div>Loading...</div>;
  }

  return (
    <Container >
      <Grid container spacing={2}>
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.idMeal}>
            <RecipeCard item={item}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default MyComponent;
