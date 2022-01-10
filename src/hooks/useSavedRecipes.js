import { useEffect, useReducer, useState } from "react";

export default function useSavedRecipes() {
    
    const [initialState, setInitialState] = useState(() => {
        return localStorage.getItem("savedRecipes") ? JSON.parse(localStorage.getItem("savedRecipes")) : [];
    });
    const [savedRecipes, setSavedRecipes] = useReducer(reducer, initialState);

    function reducer(savedRecipes, recipe) {

        const index = savedRecipes.findIndex((item) => item.id === recipe.id);

        if (index < 0) {
            return [...savedRecipes, recipe];
        } else if (index >= 0) {
            return savedRecipes.filter(item => recipe.id !== item.id);
        }
        return savedRecipes;

    }

    useEffect(() => {
        localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
    }, [savedRecipes])

    return [savedRecipes, setSavedRecipes]

}
