import React, { useState, useEffect } from 'react'

const useSaveRecipe = (id, savedRecipes) => {

    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        const index = savedRecipes.findIndex((item) => item.id === id);

        if (index >= 0) {
            setIsSaved(true);
        }
    });

    return isSaved;

}

export default useSaveRecipe