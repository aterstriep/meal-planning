import React, {useState} from "react";
import Modal from "../Modal";

import { Link } from "gatsby";

export default function MealPlanModal({recipe, addRecipe, active}) {

    const [day, setDay] = useState("Monday");
    const [added, setAdded] = useState(false);

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

    const ModalContent = () => {
        if(added == true) {
            return (
                <>
                    <p><strong>{recipe.title}</strong> has been added to your meal plan.</p>
                    <Link to="/meal-plan" className="button">View Meal Plan</Link>
                </>
            );
        }
        return (
            <>
                <p>Select a day of the week to add <strong>{recipe.title}</strong> to your meal plan:</p>
                <form>
                    <Days />
                    <button onClick={(event) => handleClick(event)}>Add to Meal Plan</button>
                </form>
            </>
        );
    }

    const handleClick = (event) => {
        event.preventDefault();
        addRecipe(recipe, day);
        setDay("Monday");

        setAdded(true);

        // document.getElementById("meal-plan-modal").style.display = "none";
    }

    return (
        <Modal className="meal-plan-modal" title="Add to meal plan" id="meal-plan-modal" setAdded={setAdded} >
            <ModalContent />
        </Modal>
    )

}
