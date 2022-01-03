import * as React from 'react'

import Container from '../Container'
import Columns from '../Columns'

const RecipeDetails = ({recipe}) => {

    const ingredients = recipe.extendedIngredients;

    const Ingredients = () => {
        if (ingredients) {
            return (
                <ul className="recipe_ingredients clear-list">
                    {ingredients.map((item, index) => {
                        return <li key={index}>{item.originalString}</li>
                    })}
                </ul>
            )
        }
        return null;
    }

    return (
        <Container className="recipe-card" padding="0 40px 40px">
            <h2 className="recipe_card-title">Recipe </h2>

            <Columns className="recipe_info" count="4">
                <div>
                    <h4 className="recipe_sub-title">Total Time</h4>
                    <span id="recipe_total-time">{recipe.readyInMinutes} minutes</span>
                </div>
                <div>
                    <h4 className="recipe_sub-title">Servings</h4>
                    <span id="recipe_servings">{recipe.servings}</span>
                </div>
            </Columns>

            <hr />

            <h4 className="recipe_sub-title">Ingredients</h4>
            <Ingredients />

            <hr />

            <h4 className="recipe_sub-title">Instructions</h4>
            <div className="recipe_instructions" dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
        </Container>
    )
}

export default RecipeDetails