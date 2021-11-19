import React, { useState, useEffect } from 'react'

const useCheckSavedRecipe = (recipe, savedRecipes) => {

    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        const index = savedRecipes.findIndex((item) => item.id === recipe.id);
        if (index >= 0) {
            setIsSaved(true);
        }
    });

    return isSaved;

}

export default useCheckSavedRecipe
