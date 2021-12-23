import React, { useEffect, useState } from 'react'
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlus, faCheck } from '@fortawesome/free-solid-svg-icons'

import useSavedRecipes from '../../hooks/useSavedRecipes'

import useCheckMealPlan from '../../hooks/useCheckMealPlan'

import RecipeActions from './RecipeActions'
import Container from "../Container"
import Badge from "../Badge"

export default function RecipeContainer({ recipe, addRecipe }) {

    const [savedRecipes, setSavedRecipes] = useSavedRecipes([]);
    const [added, setAdded] = useState('');

    let isAdded = useCheckMealPlan(recipe) ? true : false;
    
    const saveRecipe = () => {
        setSavedRecipes(recipe);
    }

    // const addToMealPlan = () => {
    //     addRecipe(recipe);
    // }

    const RecipeIcons = () => {
        return (
            <>
                <FontAwesomeIcon icon={faHeart} onClick={(event) => saveRecipe(event, recipe)} />
                {/* <FontAwesomeIcon icon={faPlus} onClick={(event) => addToMealPlan(event, recipe)} /> */}
                <FontAwesomeIcon icon={faCheck} />
            </>
        )
    }

    useEffect(() => {
        setAdded(isAdded);
        // console.log('RecipeContainer useEffect: ' + isAdded);
    }, [isAdded])

    return (
        <div
            className="recipe-container"
            recipe_id={recipe.id}
            key={recipe.id}
        >
            <div className="recipe-grid-actions">
                <RecipeActions recipe={recipe} saveRecipe={saveRecipe} addRecipe={() => addRecipe(recipe)} />
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
