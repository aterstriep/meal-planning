import React from "react";
import { useEffect, useState } from "react";
import Helmet from "react-helmet";

import useSavedRecipes from "../hooks/useSavedRecipes";
import useMealPlan from "../hooks/useMealPlan";

import Layout from "../components/Layout";
import RecipeDetails from '../components/recipes/RecipeDetails'
import Container from "../components/Container";
import RecipeActions from "../components/recipes/RecipeActions";

import config from "../../config.json";

const RecipesPage = ({location}) => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [recipe, setRecipe] = useState([]);

    const [savedRecipes, setSavedRecipes] = useSavedRecipes([]);
    const [mealPlan, setMealPlan] = useMealPlan([]);

    const addRecipe = (recipe, day) => {
        setMealPlan(recipe, day);
    }

    useEffect(() => {

        const recipeId = location.state.activeRecipe || false;

        if(recipeId) {
            fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${config.keys.spoonacular}&addRecipeInformation=true`)
                .then(
                    response => response.json()
                )
                .then(
                    data => {
                        setRecipe(data);
                        localStorage.setItem("activeRecipe", JSON.stringify(data));
                        setIsLoaded(true);
                    }
                );
        } else {
            setRecipe(JSON.parse(localStorage.getItem("activeRecipe")));
        }

    }, []);

    if (isLoaded) {
        return (
            <>
                <Helmet>
                    <body className="single-recipe" />
                    <title>{recipe.title}</title>
                    <meta name="icon" href="../images/favicon.png" />
                </Helmet>
                <Layout>
                    <Container>
                        <img src={recipe.image} alt={recipe.title} />
                        <h1 className="recipe-title">{recipe.title}</h1>
                        <RecipeActions recipe={recipe} saveRecipe={setSavedRecipes} addRecipe={addRecipe} labels={true} />
                        <p dangerouslySetInnerHTML={{ __html: recipe.summary }} />
                    </Container>
                    <RecipeDetails recipe={recipe} />
                </Layout>
            </>
        )
    }
    return null;
}

export default RecipesPage