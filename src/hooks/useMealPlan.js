import { useState, useEffect } from 'react'

const isBrowser = typeof window !== "undefined";

export default function useMealPlan(recipe) {
    
    const [mealPlan, setMealPlan] = useState(() => {
        const initialPlan = isBrowser ? JSON.parse(localStorage.getItem("mealPlan")) : [];
        return initialPlan || [];
    });

    const addRecipe = (recipe, day, mealPlan) => {
        if (mealPlan[day]) {
            setMealPlan({ ...mealPlan, [day]: [...mealPlan[day], recipe] });
        } else {
            setMealPlan({ ...mealPlan, [day]: [recipe] });
        }
    }
    
    const updateMealPlan = (recipe, day, action = "add") => {

        if( action == "add" ) {

            addRecipe(recipe, day, mealPlan);

        } else if( action == "delete" ) {

            const updatedMealPlan = mealPlan[day].filter(item => item.id != recipe.id);
            setMealPlan({ ...mealPlan, [day]: [...updatedMealPlan] });

        } else if( action == "update" ) {

            let updatedMealPlan = mealPlan[day.previous].filter(item => item.id != recipe.id);
            updatedMealPlan = { ...mealPlan, [day.previous]: [...updatedMealPlan] };
            addRecipe(recipe, day.new, updatedMealPlan);

        }

    }

    useEffect(() => {
        localStorage.setItem("mealPlan", JSON.stringify(mealPlan));
    }, [mealPlan])

    return [mealPlan, updateMealPlan]
    

}
