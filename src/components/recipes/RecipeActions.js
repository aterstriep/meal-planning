import React, {useState, useEffect} from 'react'

import useCheckSavedRecipe from '../../hooks/useCheckSavedRecipe'
import useCheckMealPlan from '../../hooks/useCheckMealPlan'

import MealPlanModal from './MealPlanModal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlus, faCheck } from '@fortawesome/free-solid-svg-icons'

export default function RecipeActions({recipe, saveRecipe, saved, addRecipe, savedRecipes}) {

    const [modalRecipe, setModalRecipe] = useState([]);
    // const [saved, setSaved] = useState("");
    const [added, setAdded] = useState("");

    // let isSaved = useCheckSavedRecipe(recipe) ? true : false;
    // let isAdded = useCheckMealPlan(recipe) ? true : false;

    const handleSave = () => {
        saveRecipe(recipe);
        // setSaved(!saved);
    }

    const handleAddRecipe = () => {
        document.getElementById("meal-plan-modal").style.display = "flex";
    }

    const ActionSaveRecipe = ({active}) => {

        let icon = <FontAwesomeIcon icon={faHeart} />;
        let text = "Save Recipe";
        let buttonClass = "";

        if (active) {
            icon = <FontAwesomeIcon icon={faCheck} />;
            text = "Recipe Saved";
            buttonClass = "active";
        }

        return (
            <button id="save-recipe" className={`recipe-action ${buttonClass}`} onClick={handleSave}>
                <span className="action-icon">{icon}</span>
                <span className="recipe-action-text">{text}</span>
            </button>
        )
    }

    const ActionAddRecipe = ({active}) => {

        let icon = <FontAwesomeIcon icon={faPlus} />;
        let text = "Add to Meal Plan";
        let buttonClass = "";

        if (active) {
            icon = <FontAwesomeIcon icon={faCheck} />;
            text = "Added to Meal Plan";
        }

        return (
            <button id="add-recipe" className={`recipe-action ${buttonClass}`} onClick={handleAddRecipe}>
                <span className="action-icon">{icon}</span>
                <span className="recipe-action-text">{text}</span>
            </button>
        )
    }

    useEffect(() => {
        console.log(saved);
    })

    return (
        <div className="recipe-actions-container">
            
            <MealPlanModal recipe={recipe} addRecipe={addRecipe} />
            <ActionSaveRecipe active={saved} />
            <ActionAddRecipe active={added} />

        </div>
    )
}
