import React from "react";
import {
    Typography,
    CardContent,
    CardMedia,
  } from "@mui/material";

const RecipeView = ({ items }) => {
  return (
    <div>
      <CardMedia
        component="img"
        height="400"
        image={items.strMealThumb}
        alt={items.strMeal}
      />
      <CardContent>

        <Typography variant="h5" component="div">
          {items.strMeal}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {items.strCategory} - {items.strArea}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {items.strInstructions}
        </Typography>
        <Typography variant="h6">Ingredients:</Typography>
        <ul>
          {Object.entries(items)
            .filter(
              ([key, value]) =>
                key.includes("strIngredient") && value !== "" && value !== null
            )
            .map(([key, value]) => (
              <li key={key}>{`${value} - ${
                items["strMeasure" + key.slice(-2)]
              }`}</li>
            ))}
        </ul>
      </CardContent>
    </div>
  );
};

export default RecipeView;
