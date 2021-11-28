import React, { useState, useEffect } from 'react'

const useCheckSavedRecipe = (recipe) => {

    const [isSaved, setIsSaved] = useState(false);
    const [savedRecipes, setSavedRecipes] = useState(() => {
        const initialSaved = JSON.parse(localStorage.getItem("savedRecipes"));
        // const initialSaved = [];
        return initialSaved || [];
    });

    useEffect(() => {
        if(savedRecipes.length > 0) {
            const index = savedRecipes.findIndex((item) => item.id === recipe.id);
            if (index >= 0) {
                setIsSaved(true);
            }
        }
    });

    return isSaved;

}

export default useCheckSavedRecipe
