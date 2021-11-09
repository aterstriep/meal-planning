import * as React from "react"
import { useState } from "react"
import Layout from '../components/Layout'
import RecipeGrid from '../components/RecipeGrid'
import RecipeDetails from "../components/RecipeDetails"

// markup
const IndexPage = () => {

  const [currentRecipe, setCurrentRecipe] = useState(false);

  const triggerRecipeDetails = (recipe) => {
    setCurrentRecipe(recipe);
    // console.log(currentRecipe);
  }

  const RecipeModal = () => {
    if (currentRecipe) {
      return (
        <RecipeDetails currentRecipe={currentRecipe} />
      )
    } else {
      return null;
    }
  }

  return (
    <Layout>
      <RecipeModal />
      <RecipeGrid recipeOnClick={triggerRecipeDetails} />
    </Layout>
  )
}

export default IndexPage
