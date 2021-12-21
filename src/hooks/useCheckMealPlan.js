import React, { useState, useEffect } from 'react'
import useMealPlan from './useMealPlan';

const useCheckMealPlan = (recipe) => {

    const [isAdded, setIsAdded] = useState(false);
    const [mealPlan, setMealPlan] = useMealPlan([]);

    useEffect(() => {
        // To Do: refactor
        if (Object.keys(mealPlan).length > 0) {
            for (const prop in mealPlan) {
                const index = mealPlan[prop].findIndex((item) => item.id === recipe.id);
                if(index >= 0) {
                    setIsAdded(true);
                }
            }
        }
    });

    return isAdded;

}

export default useCheckMealPlan
