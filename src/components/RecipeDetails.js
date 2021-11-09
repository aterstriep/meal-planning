import * as React from 'react'
import { useEffect, useState } from 'react'

import Container from './Container'
import Columns from './Columns'

const RecipeDetails = ({currentRecipe}) => {

    const [recipe, setRecipe] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const ingredients = recipe.extendedIngredients;

    const toggleRecipe = () => {
        document.getElementById("recipe-card").classList.toggle("show");
    }

    const RecipeCard = () => {

        if(isLoaded) {
            return (
                <div className="recipe-card" id="recipe-card" onClick={toggleRecipe}>
                    <h3 className="recipe_card-title">Recipe</h3>
                    <Container className="recipe_wrapper" id="recipe_wrapper" padding="30px">

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
                        <ul className="recipe_ingredients clear-list">
                            {ingredients.map((item, index) => {
                                return <li key={index}>{item.originalString}</li>
                            })}
                        </ul>

                        <hr />

                        <h4 className="recipe_sub-title">Instructions</h4>
                        <div className="recipe_instructions" dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
                    </Container>
                </div>
            )
        } else {
            return null;
        }

    }

    useEffect(() => {

        fetch(`https://api.spoonacular.com/recipes/${currentRecipe.id}/information?apiKey=9446603e12154b3c983025231a0ee10e&addRecipeInformation=true`)
            .then(
                response => response.json()
            )
            .then(
                data => {
                    setRecipe(data);
                    setIsLoaded(true);
                    console.log(data);
                }
            );

    }, []);

    return (
        <Container className="mw-1400">
            <img src={currentRecipe.image} />
            <h1>{currentRecipe.title}</h1>
            {/* <p dangerouslySetInnerHTML={{ __html: recipe.summary }} /> */}
            <RecipeCard />
        </Container>
    )
}

export default RecipeDetails