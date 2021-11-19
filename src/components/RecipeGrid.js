import * as React from "react"
import { useEffect, useState } from "react"
import { Link } from "gatsby";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import Container from "./Container";
import Badge from "./Badge";
import RecipeContainer from "./RecipeContainer";



const RecipeGrid = ({toggleSaveRecipe, savedRecipes, recipes}) => {

    const [activeRecipe, setActiveRecipe] = useState(false);

    return (
        <div className="recipe-grid">
            <Container className="recipe-grid-wrap mw-1400">
                {recipes.map(recipe => {
                    return (
                        <RecipeContainer key={recipe.id} recipe={recipe} savedRecipes={savedRecipes} toggleSaveRecipe={toggleSaveRecipe} />
                    );
                })}
            </Container>
        </div>
    )
}

export default RecipeGrid
