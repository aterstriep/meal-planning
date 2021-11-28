import React from "react"
import { useEffect, useState } from "react"

import Layout from "../components/Layout";
import RecipeDetails from '../components/RecipeDetails'

const RecipesPage = ({location}) => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [recipe, setRecipe] = useState([]);
    const recipeId = location.state.activeRecipe;
    const isSaved = location.state.saved;
    const savedRecipes = location.state.savedRecipes;

    console.log(location)

    useEffect(() => {

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

    }, []);

    if (isLoaded) {
        return (
            <Layout>
                <RecipeDetails recipe={recipe} />
            </Layout>
        )
    } else {
        return null;
    }
}

export default RecipesPage
