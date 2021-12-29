import * as React from "react"
import { useState, useEffect, useReducer } from "react"
import styled from "styled-components"
import Layout from '../components/Layout'
import Container from '../components/Container'
import RecipeGrid from '../components/recipes/RecipeGrid'

import useSavedRecipes from "../hooks/useSavedRecipes"
import useMealPlan from "../hooks/useMealPlan"

const PageTitle = styled.h1`
    margin-top: 0;
`;

const IndexPage = () => {

  const [recipes, setRecipes] = useState([]);
  // const [savedRecipes, setSavedRecipes] = useSavedRecipes([]);
  const [mealPlan, setMealPlan] = useMealPlan([]);

  const addRecipe = (recipe, day) => {
    setMealPlan(recipe, day);
  }

  useEffect(() => {

    // fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=9446603e12154b3c983025231a0ee10e&addRecipeInformation=true')
    //     .then(
    //         response => response.json()
    //     )
    //     .then(
    //         data => {
    //             setRecipes(data.results);
    //             localStorage.setItem("recipes", JSON.stringify(data.results));
    //         }
    //     );

    const testRecipes = JSON.parse(localStorage.getItem("recipes"));

    setRecipes(testRecipes);

  }, [])

  if(recipes) {
    return (
      <Layout>
        <Container className="recipe-grid-wrap">
          <PageTitle>Recipes</PageTitle>
          <RecipeGrid recipes={recipes} actions={false} addRecipe={addRecipe} />
        </Container>
      </Layout>
    )
  } else {
    return <h1>Test</h1>;
  }

}

export default IndexPage
