import * as React from "react"
import { useEffect, useState } from "react"
import { Link } from "gatsby";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import Container from "./Container";
import Badge from "./Badge";
import RecipeContainer from "./RecipeContainer";

import useSavedRecipes from "../hooks/useSavedRecipes";


const RecipeGrid = ({recipes}) => {

    const [activeRecipe, setActiveRecipe] = useState(false);
    const [saved, setSaved] = useSavedRecipes([]);

    const setSavedRecipes = (recipe) => {
        setSaved(recipe);
    }

    return (
        <div className="recipe-grid">
            <Container className="recipe-grid-wrap mw-1400">
                {recipes.map(recipe => {
                    return (
                        <RecipeContainer key={recipe.id} recipe={recipe} setSavedRecipes={setSavedRecipes} />
                    );
                })}
            </Container>
        </div>
    )
}

export default RecipeGrid
