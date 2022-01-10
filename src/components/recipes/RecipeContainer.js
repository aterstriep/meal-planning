import React from 'react'
import { Link } from "gatsby"

import RecipeActions from './RecipeActions'
import Badge from "../Badge"

export default function RecipeContainer({ recipe, day, draggable = false, onDragStart = "", children, actions = ['add', 'save'], addRecipe, saveRecipe }) {

    const RecipeContainerDiv = ({children}) => {
        if(draggable) {
            return (
                <div draggable={draggable} onDragStart={(e) => onDragStart(e, recipe, day)} className="recipe-container" recipe_id={recipe.id} id={recipe.id} >
                    {children}
                </div>
            )
        }
        return (
            <div className="recipe-container" recipe_id={recipe.id} id={recipe.id} >
                {children}
            </div>
        )
    }

    return (
        <RecipeContainerDiv>

            <RecipeActions
                recipe={recipe}
                actions={actions}
                saveRecipe={saveRecipe}
                addRecipe={() => addRecipe(recipe)}
            />

            <Link to={`/recipe?recipe=${recipe.id}`} state={{ activeRecipe: recipe.id }}>
                <div className="image-wrapper">
                    <img src={recipe.image} alt={recipe.title} />
                </div>
            </Link>

            <div className="recipe-details" padding="0">
                <div className="dish-types">
                    {recipe.dishTypes.map((type, index) => {
                        return <Badge key={index}>{type}</Badge>
                    })}
                </div>

                <Link to={`/recipe?recipe=${recipe.id}`} state={{ activeRecipe: recipe.id }}><h3>{recipe.title}</h3></Link>

                {children}
                
            </div>

        </RecipeContainerDiv>
    )
}
