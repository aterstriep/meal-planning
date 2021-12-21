import React, { useEffect, useState } from 'react'
import useCheckSavedRecipe from '../../hooks/useCheckSavedRecipe'
import useCheckMealPlan from '../../hooks/useCheckMealPlan'
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlus, faCheck } from '@fortawesome/free-solid-svg-icons'

import Container from "../Container"
import Badge from "../Badge"

export default function RecipeContainer({ recipe, setSavedRecipes, addRecipe}) {
    
    let savedClass = useCheckSavedRecipe(recipe) ? "saved-recipe" : "";

    const saveRecipe = (event, recipe) => {
        setSavedRecipes(recipe);
        event.currentTarget.parentElement.parentElement.classList.toggle("saved-recipe");
    }

    const addToMealPlan = (event, recipe) => {
        addRecipe(recipe);
    }

    const RecipeIcons = () => {
        return (
            <>
                <FontAwesomeIcon icon={faHeart} onClick={(event) => saveRecipe(event, recipe)} />
                <FontAwesomeIcon icon={faPlus} onClick={(event) => addToMealPlan(event, recipe)} />
                <FontAwesomeIcon icon={faCheck} />
            </>
        )
    }

    return (
        <div
            className={`recipe-container ${savedClass}`}
            recipe_id={recipe.id}
            key={recipe.id}
        >
            <div className="recipe-grid-actions">
                <RecipeIcons />
            </div>
            <Link to={`/recipe?${recipe.id}`} state={{ activeRecipe: recipe.id }}>
                <img src={recipe.image} />
            </Link>
            <Container className="mealtypes" padding="0px">
                {recipe.dishTypes.map((type, index) => {
                    return <Badge key={index}>{type}</Badge>
                })}
            </Container>
            <Link to={`/recipe?${recipe.id}`} state={{ activeRecipe: recipe.id }}><h3>{recipe.title}</h3></Link>
        </div>
    )
}
