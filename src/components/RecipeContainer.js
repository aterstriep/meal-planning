import React, { useEffect, useState } from 'react'
import useCheckSavedRecipe from '../hooks/useCheckSavedRecipe';
import { Link } from "gatsby";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import Container from "./Container";
import Badge from "./Badge";

export default function RecipeContainer({ recipe, setSavedRecipes }) {
    
    // let savedRecipes = JSON.parse(localStorage.getItem("savedRecipes"));
    let isSaved = useCheckSavedRecipe(recipe);
    let recipeClass = isSaved ? "saved-recipe" : "";

    const handleClick = (event, recipe) => {
        setSavedRecipes(recipe);
        event.currentTarget.parentElement.classList.toggle("saved-recipe");
    }

    return (
        <div
            className={`recipe-container ${recipeClass}`}
            recipe_id={recipe.id}
            key={recipe.id}
        >
            <FontAwesomeIcon icon={faHeart} onClick={(event) => handleClick(event, recipe)} />
            <Link to={`/recipe?${recipe.id}`} state={{ activeRecipe: recipe.id }}>
                <img src={recipe.image} />
            </Link>
            <Container className="mealtypes" padding="0px">
                {recipe.dishTypes.map((type, index) => {
                    return <Badge key={index}>{type}</Badge>
                })}
            </Container>
            <Link to={`/recipe?${recipe.id}`} state={{ activeRecipe: recipe.id, saved: isSaved }}><h3>{recipe.title}</h3></Link>
        </div>
    )
}
