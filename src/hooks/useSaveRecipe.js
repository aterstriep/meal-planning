import { useState, useEffect } from 'react'
import useCheckSavedRecipe from './useCheckSavedRecipe';

export default function useSaveRecipe(recipe) {
    
    const [savedRecipes, setSavedRecipes] = useState(() => {
        const initialSaved = JSON.parse(localStorage.getItem("savedRecipes"));
        return initialSaved || [];
    });
    
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
    }, [savedRecipes])

    return [savedRecipes, handleClick]

}
