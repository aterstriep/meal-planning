import * as React from "react"
import { useState } from "react"

import RecipeContainer from "./RecipeContainer";
import MealPlanModal from "./MealPlanModal";


const RecipeGrid = ({ recipes, actions = ['add', 'save'], saveRecipe, addRecipe}) => {

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
                        <RecipeContainer key={recipe.id} recipe={recipe} actions={actions} saveRecipe={saveRecipe} addRecipe={triggerMealPlanModal}  />
                    );
                })}
            </div>
        )
    }

    return (
        <>
            <MealPlanModal recipe={modalRecipe} addRecipe={addRecipe}  />
            <Grid />
        </>
    )
}

export default RecipeGrid
