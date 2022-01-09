import { useState, useEffect } from 'react'
import useMealPlan from './useMealPlan';

const useCheckMealPlan = (recipe) => {

    const [isAdded, setIsAdded] = useState(false);
    const [mealPlan, setMealPlan] = useMealPlan([]);

    useEffect(() => {
        if (Object.keys(mealPlan).length > 0) {
            for (const prop in mealPlan) {
                const index = mealPlan[prop].findIndex((item) => item.id === recipe.id);
                if(index >= 0) {
                    setIsAdded(true);
                }
            }
        }
    }, [mealPlan, recipe.id]);

    return isAdded;

}

export default useCheckMealPlan
