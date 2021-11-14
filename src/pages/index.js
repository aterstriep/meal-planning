import * as React from "react"
import { useState } from "react"
import Layout from '../components/Layout'
import RecipeGrid from '../components/RecipeGrid'


const IndexPage = () => {

  const [savedRecipes, setSavedRecipes] = useState([]);

  const updateSavedRecipes = (recipe) => {
    setSavedRecipes([...savedRecipes, recipe]);
    console.log(savedRecipes);
  }

  return (
    <Layout>
      <RecipeGrid updateSavedRecipes={updateSavedRecipes} savedRecipes={savedRecipes} />
    </Layout>
  )

}

export default IndexPage
