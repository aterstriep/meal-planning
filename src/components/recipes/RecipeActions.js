import React, {useState, useEffect} from 'react'

import useCheckSavedRecipe from '../../hooks/useCheckSavedRecipe'
import useCheckMealPlan from '../../hooks/useCheckMealPlan'

import MealPlanModal from './MealPlanModal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlus, faCheck } from '@fortawesome/free-solid-svg-icons'

export default function RecipeActions({ recipe, actions = ['add', 'save'], saveRecipe, addRecipe, labels}) {

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

        let icon = (active && labels) ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faHeart} />;
        let text = active ? "Recipe Saved" : "Save Recipe";
        let buttonClass = active ? "active" : "";

        const Label = () => {
            if (labels) {
                return (
                    <span className="recipe-action-text">{text}</span>
                )
            }
            return null;
        }

        if(actions.includes('save')) {
            return (
                <button id="save-recipe" className={`recipe-action ${buttonClass}`} onClick={handleClick}>
                    <span className="action-icon">{icon}</span>
                    <Label />
                </button>
            )
        }
        return null;
    }

    const ActionAddRecipe = ({active}) => {

        const handleClick = () => {
            document.getElementById("meal-plan-modal").style.display = "flex";
        }

        let icon = active ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faPlus} />;
        let text = active ? "Added to Meal Plan" : "Add to Meal Plan";
        let buttonClass = active ? "active" : "";


        const Label = () => {
            if (labels) {
                return (
                    <span className="recipe-action-text">{text}</span>
                )
            }
            return null;
        }

        if (actions.includes('add')) {
            return (
                <button id="add-recipe" className={`recipe-action ${buttonClass}`} onClick={handleClick}>
                    <span className="action-icon">{icon}</span>
                    <Label />
                </button>
            )
        }
        return null;
    }

    useEffect(() => {
        setSaved(isSaved);
        setAdded(isAdded);
    }, [isSaved, isAdded])

    if(actions) {
        return (
            <div className="recipe-actions-container">
                <MealPlanModal recipe={recipe} addRecipe={handleAddRecipe} />
                <ActionSaveRecipe active={saved} />
                <ActionAddRecipe active={added} />
            </div>
        )
    }
    return null;
    
}
