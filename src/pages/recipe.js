import React from "react"
import { useEffect, useState } from "react"

import useSavedRecipes from "../hooks/useSavedRecipes";
import useMealPlan from "../hooks/useMealPlan";

import Layout from "../components/Layout";
import RecipeDetails from '../components/recipes/RecipeDetails'
import Container from "../components/Container";

import RecipeActions from "../components/recipes/RecipeActions";

import useCheckSavedRecipe from "../hooks/useCheckSavedRecipe";

const RecipesPage = ({location}) => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [recipe, setRecipe] = useState([]);

    const [savedRecipes, setSavedRecipes] = useSavedRecipes([]);
    const [saved, setSaved] = useState(false);
    const isSaved = useCheckSavedRecipe(recipe) ? true : false;

    const [mealPlan, setMealPlan] = useMealPlan([]);

    const recipeId = location.state.activeRecipe;

    const saveRecipe = (recipe) => {
        setSavedRecipes(recipe);
        setSaved(!saved);
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
                        setSaved(isSaved);
                        setIsLoaded(true);
                    }
                );
        }

    });

    if (isLoaded) {
        return (
            <Layout>

                <Container>
                    <img src={recipe.image} />
                    <h1 className="recipe-title">{recipe.title}</h1>

                    <RecipeActions recipe={recipe} saveRecipe={saveRecipe} addRecipe={addRecipe} saved={saved} savedRecipes={savedRecipes} />

                    <p dangerouslySetInnerHTML={{ __html: recipe.summary }} />
                </Container>

                <RecipeDetails recipe={recipe} />

            </Layout>
        )
    } else {
        return null;
    }
}

export default RecipesPage
