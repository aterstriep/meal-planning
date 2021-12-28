import React from "react";
import { useEffect, useState } from "react";
import Helmet from "react-helmet";

import useSavedRecipes from "../hooks/useSavedRecipes";
import useMealPlan from "../hooks/useMealPlan";

import Layout from "../components/Layout";
import RecipeDetails from '../components/recipes/RecipeDetails'
import Container from "../components/Container";

import RecipeActions from "../components/recipes/RecipeActions";

const RecipesPage = ({location}) => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [recipe, setRecipe] = useState([]);

    const [savedRecipes, setSavedRecipes] = useSavedRecipes([]);
    const [mealPlan, setMealPlan] = useMealPlan([]);

    const recipeId = location.state.activeRecipe;

    const saveRecipe = (recipe) => {
        setSavedRecipes(recipe);
    }

    const addRecipe = (recipe, day) => {
        setMealPlan(recipe, day);
    }

    useEffect(() => {
        if(!isLoaded) {
            fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=9446603e12154b3c983025231a0ee10e&addRecipeInformation=true`)
                .then(
                    response => response.json()
                )
                .then(
                    data => {
                        setRecipe(data);
                        setIsLoaded(true);
                    }
                );
        }
    });

    if (isLoaded) {
        return (
            <>
                <Helmet>
                    <body className="single-recipe" />
                </Helmet>
                <Layout>
                    <Container>
                        <img src={recipe.image} />
                        <h1 className="recipe-title">{recipe.title}</h1>
                        <RecipeActions recipe={recipe} saveRecipe={saveRecipe} addRecipe={addRecipe} labels="true" />
                        <p dangerouslySetInnerHTML={{ __html: recipe.summary }} />
                    </Container>
                    <RecipeDetails recipe={recipe} />
                </Layout>
            </>
        )
    } else {
        return null;
    }
}

export default RecipesPage
