import { useState, useEffect } from 'react'

const isBrowser = typeof window !== "undefined";

export default function useMealPlan(recipe) {
    
    const [mealPlan, setMealPlan] = useState(() => {
        const initialPlan = isBrowser ? JSON.parse(localStorage.getItem("mealPlan")) : [];
        return initialPlan || [];
    });
    
    const addRecipe = (recipe, day, action = "add") => {

        if( action == "add" ) {

            if (mealPlan[day]) {
                setMealPlan({ ...mealPlan, [day]: [...mealPlan[day], recipe] });
            } else {
                setMealPlan({ ...mealPlan, [day]: [recipe] });
            }

        } else if( action == "delete" ) {

            const updatedMealPlan = mealPlan[day].filter(item => item != recipe);
            setMealPlan({ ...mealPlan, [day]: [...updatedMealPlan] });

        }

    }

    useEffect(() => {
        localStorage.setItem("mealPlan", JSON.stringify(mealPlan));
    }, [mealPlan])

    return [mealPlan, addRecipe]
    

}
