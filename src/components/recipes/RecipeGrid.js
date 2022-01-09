import * as React from "react"
import { useEffect, useState } from "react"

import RecipeContainer from "./RecipeContainer";
import MealPlanModal from "./MealPlanModal";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const RecipeGrid = ({ recipes, actions = ['add', 'save'], saveRecipe, addRecipe}) => {

    const [modalRecipe, setModalRecipe] = useState([]);

    const triggerMealPlanModal = (recipe) => {
        setModalRecipe(recipe);
        document.getElementById("meal-plan-modal").style.display = "flex";
    }

    if(recipes.length) {
        return (
            <>
                <MealPlanModal recipe={modalRecipe} addRecipe={addRecipe} />
                <div className="recipe-grid">
                    {recipes.map(recipe => {
                        return (
                            <RecipeContainer key={recipe.id} recipe={recipe} actions={actions} saveRecipe={saveRecipe} addRecipe={triggerMealPlanModal} />
                        );
                    })}
                </div>
            </>
        )
    }
    return (
        <p>You have not saved any recipes.</p>
    )
}

export default RecipeGrid
