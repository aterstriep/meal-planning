import React, { useEffect, useState } from 'react'
import { Link } from "gatsby"

import RecipeActions from './RecipeActions'
import Container from "../Container"
import Badge from "../Badge"

export default function RecipeContainer({ recipe, day, draggable = false, onDragStart = "", children, actions = ['add', 'save'], addRecipe, saveRecipe }) {

    return (
        <div draggable={draggable} onDragStart={(e) => onDragStart(e, recipe, day)} className="recipe-container" recipe_id={recipe.id} id={recipe.id} >

            <RecipeActions
                recipe={recipe}
                actions={actions}
                saveRecipe={saveRecipe}
                addRecipe={() => addRecipe(recipe)}
            />

            <Link to={`/recipe?${recipe.id}`} state={{ activeRecipe: recipe.id }}>
                <div className="image-wrapper">
                    <img src={recipe.image} />
                </div>
            </Link>

            <div className="recipe-details" padding="0">
                <div className="dish-types">
                    {recipe.dishTypes.map((type, index) => {
                        return <Badge key={index}>{type}</Badge>
                    })}
                </div>

                <Link to={`/recipe?${recipe.id}`} state={{ activeRecipe: recipe.id }}><h3>{recipe.title}</h3></Link>

                {children}
                
            </div>

        </div>
    )
}
