import * as React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

import config from "../../config.json";

import Layout from "../components/Layout";
import Container from "../components/Container";
import RecipeGrid from "../components/recipes/RecipeGrid";

import useSavedRecipes from "../hooks/useSavedRecipes";
import useMealPlan from "../hooks/useMealPlan";

const PageTitle = styled.h1`
    margin-top: 0;
`;

const IndexPage = () => {

  const [recipes, setRecipes] = useState([]);
  const [saved, setSaved] = useSavedRecipes([]);
  const [mealPlan, setMealPlan] = useMealPlan([]);
  
  const setSavedRecipes = (recipe) => {
    setSaved(recipe);
  }

  const addRecipe = (recipe, day) => {
    setMealPlan(recipe, day);
  }

  useEffect(() => {

    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${config.keys.spoonacular}&addRecipeInformation=true`)
        .then(
            response => response.json()
        )
        .then(
            data => {
                setRecipes(data.results);
            }
        );

  }, [])

  if(recipes) {
    return (
      <Layout>
        <Container className="recipe-grid-wrap">
          <PageTitle>Recipes</PageTitle>
          <RecipeGrid recipes={recipes} actions={false} setSavedRecipes={setSavedRecipes} addRecipe={addRecipe} />
        </Container>
      </Layout>
    )
  } else {
    return null;
  }

}

export default IndexPage
