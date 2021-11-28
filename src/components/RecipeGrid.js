import * as React from "react"
import { useEffect, useState } from "react"
import { Link } from "gatsby";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import Container from "./Container";
import Badge from "./Badge";
import RecipeContainer from "./RecipeContainer";

import useSavedRecipes from "../hooks/useSavedRecipes";


const RecipeGrid = ({recipes, setSavedRecipes}) => {

    const [activeRecipe, setActiveRecipe] = useState(false);
    

    return (
        <div className="recipe-grid">
            {recipes.map(recipe => {
                return (
                    <RecipeContainer key={recipe.id} recipe={recipe} setSavedRecipes={setSavedRecipes} />
                );
            })}
        </div>
    )
}

export default RecipeGrid
