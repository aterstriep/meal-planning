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

const isBrowser = typeof window !== "undefined";
let initialState = isBrowser ? JSON.parse(localStorage.getItem("savedRecipes")) : [];

function reducer(savedRecipes, action) {
  switch (action.type) {
    case "add":
      return [...savedRecipes, action.recipe];
    case "remove":
      return savedRecipes.filter(recipe => action.recipe.id != recipe.id);
    default:
      return savedRecipes;
  }

  // const index = savedRecipes.findIndex((recipe) => recipe.id === action.recipe.id);

  // if (index < 0) {
  //   return [...savedRecipes, action.recipe];
  // } else if (index >= 0) {
  //   return savedRecipes.filter(recipe => action.recipe.id != recipe.id);
  // }
  // return savedRecipes;

}

const IndexPage = () => {

  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useReducer(reducer, initialState);
  const [mealPlan, setMealPlan] = useMealPlan([]);

  const saveRecipe = (recipe) => {

    const index = savedRecipes.findIndex((item) => item.id === recipe.id);
    let type = "";

    if (index < 0) {
      type = "add";
    } else if (index >= 0) {
      type = "remove";
    }

    setSavedRecipes({ type: type, recipe: recipe });
  }

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

  useEffect(() => {
    localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
  }, [savedRecipes])

  if(recipes) {
    return (
      <Layout>
        <Container className="recipe-grid-wrap">
          <PageTitle>Recipes</PageTitle>
          <RecipeGrid recipes={recipes} actions={['save']} saveRecipe={saveRecipe} addRecipe={addRecipe} />
        </Container>
      </Layout>
    )
  } else {
    return <h1>Test</h1>;
  }

}

export default IndexPage
