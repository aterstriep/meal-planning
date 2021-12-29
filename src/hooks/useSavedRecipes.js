import { useState, useEffect } from "react";

const isBrowser = typeof window !== "undefined";

export default function useSavedRecipes(recipe) {
    
    const [savedRecipes, setSavedRecipes] = useState(() => {
        const initialPlan = isBrowser ? JSON.parse(localStorage.getItem("savedRecipes")) : [];
        return initialPlan || [];
    });
    const [recipeOutput, setRecipeOutput] = useState(savedRecipes);

    const handleClick = (recipe) => {

        const index = savedRecipes.findIndex((item) => item.id === recipe.id);

        if (index < 0) {
            setSavedRecipes([...savedRecipes, recipe]);
        } else {
            const remainingRecipes = savedRecipes.filter(item => recipe.id != item.id);
            setSavedRecipes(remainingRecipes);
        }
    }

    useEffect(() => {
        localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
        setRecipeOutput(JSON.parse(localStorage.getItem("savedRecipes")));
    }, [savedRecipes])

    return [recipeOutput, handleClick]

}
