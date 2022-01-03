import { useState, useEffect } from 'react'
import useSavedRecipes from './useSavedRecipes';

const useCheckSavedRecipe = (recipe) => {

    const [isSaved, setIsSaved] = useState(false);
    const [savedRecipes, setSavedRecipes] = useSavedRecipes([]);

    useEffect(() => {
        if(savedRecipes.length > 0) {
            const index = savedRecipes.findIndex((item) => item.id === recipe.id);
            if (index >= 0) {
                setIsSaved(true);
            }
        }
    }, [savedRecipes, recipe.id]);

    return isSaved;

}

export default useCheckSavedRecipe
