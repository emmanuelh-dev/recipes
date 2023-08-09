import React from "react";
import {
  Typography,
  Paper,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import RecipeView from "@/components/RecipeView";
const RecipeCard = ({ recipe }) => {
  const items = recipe.meals[0];
  return (
    <Container>
      <RecipeView items={items} />
    </Container>
  );
};

const RecipeInterface = ({ recipe }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <RecipeCard recipe={recipe} />
      </Grid>
    </Grid>
  );
};

export default RecipeInterface;

export async function getStaticPaths() {
  const response = await fetch(`${process.env.BASE_URL}/filter.php?c=SeaFood`);
  const data = await response.json();

  const paths = data.meals.map((item) => ({
    params: { idMeal: item.idMeal.toString() },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const idMeal = params.idMeal;
  const url = `${process.env.BASE_URL}/lookup.php?i=${idMeal}`;

  const recipeResponse = await fetch(url);
  const data = await recipeResponse.json();

  return {
    props: {
      recipe: data,
    },
    revalidate: 3600,
  };
}
