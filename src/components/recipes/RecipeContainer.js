import React, { useEffect, useState } from 'react'
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faPlus, faCheck } from '@fortawesome/free-solid-svg-icons'

import useSavedRecipes from '../../hooks/useSavedRecipes'

import useCheckMealPlan from '../../hooks/useCheckMealPlan'

import RecipeActions from './RecipeActions'
import Container from "../Container"
import Badge from "../Badge"

export default function RecipeContainer({ recipe, actions = ['add', 'save'], addRecipe }) {

    const [savedRecipes, setSavedRecipes] = useSavedRecipes([]);
    const [added, setAdded] = useState('');

    let isAdded = useCheckMealPlan(recipe) ? true : false;
    
    const saveRecipe = () => {
        setSavedRecipes(recipe);
    }

    useEffect(() => {
        setAdded(isAdded);
    }, [isAdded])

    return (
        <div
            className="recipe-container"
            recipe_id={recipe.id}
            key={recipe.id}
        >
            <RecipeActions recipe={recipe} actions={actions} saveRecipe={saveRecipe} addRecipe={() => addRecipe(recipe)} />
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
