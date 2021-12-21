import * as React from "react"
import { useEffect, useState } from "react"
import { Link } from "gatsby";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import Container from "../Container";
import Badge from "../Badge";
import RecipeContainer from "./RecipeContainer";
import MealPlanModal from "./MealPlanModal";


const RecipeGrid = ({recipes, setSavedRecipes, addRecipe}) => {

    const [modalRecipe, setModalRecipe] = useState([]);

    const triggerMealPlanModal = (recipe) => {
        setModalRecipe(recipe);
        document.getElementById("meal-plan-modal").style.display = "flex";
    }

    const Grid = () => {
        return (
            <div className="recipe-grid">
                {recipes.map(recipe => {
                    return (
                        <RecipeContainer key={recipe.id} recipe={recipe} setSavedRecipes={setSavedRecipes} addRecipe={triggerMealPlanModal}  />
                    );
                })}
            </div>
        )
    }

    return (
        <>
            <MealPlanModal recipe={modalRecipe} addRecipe={addRecipe} />
            <Grid />
        </>
    )
}

export default RecipeGrid
