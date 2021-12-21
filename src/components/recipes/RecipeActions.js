import React, {useState, useEffect} from 'react'

import useCheckSavedRecipe from '../../hooks/useCheckSavedRecipe'
import useCheckMealPlan from '../../hooks/useCheckMealPlan'

import MealPlanModal from './MealPlanModal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlus, faCheck } from '@fortawesome/free-solid-svg-icons'

export default function RecipeActions({recipe, saveRecipe, addRecipe, labels}) {

    const [saved, setSaved] = useState(false);
    const [added, setAdded] = useState(false);

    let isSaved = useCheckSavedRecipe(recipe) ? true : false;
    let isAdded = useCheckMealPlan(recipe) ? true : false;

    const handleAddRecipe = (recipe, day) => {
        addRecipe(recipe, day);
        setAdded(true);
    }

    const ActionSaveRecipe = ({active}) => {

        const handleClick = () => {
            saveRecipe(recipe);
            setSaved(!saved);
        }

        let icon = <FontAwesomeIcon icon={faHeart} />;
        let text = "Save Recipe";
        let buttonClass = "";

        if (active) {
            icon = <FontAwesomeIcon icon={faCheck} />;
            text = "Recipe Saved";
            buttonClass = "active";
        }

        const Label = () => {
            if (labels) {
                return (
                    <span className="recipe-action-text">{text}</span>
                )
            }
            return null;
        }

        return (
            <button id="save-recipe" className={`recipe-action ${buttonClass}`} onClick={handleClick}>
                <span className="action-icon">{icon}</span>
                <Label />
            </button>
        )
    }

    const ActionAddRecipe = ({active}) => {

        const handleClick = () => {
            document.getElementById("meal-plan-modal").style.display = "flex";
        }

        let icon = <FontAwesomeIcon icon={faPlus} />;
        let text = "Add to Meal Plan";
        let buttonClass = "";

        if (active) {
            icon = <FontAwesomeIcon icon={faCheck} />;
            text = "Added to Meal Plan";
            buttonClass = "active";
        }

        const Label = () => {
            if (labels) {
                return (
                    <span className="recipe-action-text">{text}</span>
                )
            }
            return null;
        }

        return (
            <button id="add-recipe" className={`recipe-action ${buttonClass}`} onClick={handleClick}>
                <span className="action-icon">{icon}</span>
                <Label />
            </button>
        )
    }

    useEffect(() => {
        setSaved(isSaved);
        setAdded(isAdded);
    }, [isSaved, isAdded])

    return (
        <div className="recipe-actions-container">
            
            <MealPlanModal recipe={recipe} addRecipe={handleAddRecipe} />

            <ActionSaveRecipe active={saved} />
            <ActionAddRecipe active={added} />

        </div>
    )
}
