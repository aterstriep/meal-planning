import { useState, useEffect } from 'react'

export default function useSaveRecipe() {
    
    const [savedRecipes, setSavedRecipes] = useState(() => {
        const initialSaved = JSON.parse(localStorage.getItem("savedRecipes"));
        // const initialValue = [];
        return initialSaved || [];
    });

    return savedRecipes

}
