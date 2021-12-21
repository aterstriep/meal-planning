import React, {useState} from "react";
import Modal from "../Modal";

export default function MealPlanModal({recipe, addRecipe, active}) {

    const [day, setDay] = useState("Monday");

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const Days = () => {
        return (
            <select
                name="daySelect"
                value={day}
                onChange={(event) => setDay(event.target.value)}
            >
                {days.map((day, index) => {
                    return <option key={index} value={day}>{day}</option>
                })}
            </select>
        )
    }

    const handleClick = (event) => {
        event.preventDefault();
        addRecipe(recipe, day);
        setDay("Monday");
        document.getElementById("meal-plan-modal").style.display = "none";
    }

    return (
        <Modal className="meal-plan-modal" title="Add to meal plan" id="meal-plan-modal" >
            <p>Select a day of the week to add <strong>{recipe.title}</strong> to your meal plan:</p>
            <form>
                <Days />
                <button onClick={(event) => handleClick(event)}>Add to Meal Plan</button>
            </form>
        </Modal>
    )

}
