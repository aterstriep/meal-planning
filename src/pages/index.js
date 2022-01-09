import * as React from "react"
import { useState, useEffect } from "react"
import Layout from '../components/Layout'
import Container from '../components/Container'
import RecipeGrid from '../components/recipes/RecipeGrid'
import RecipeFilters from "../components/recipes/RecipeFilters"
import Pagination from "../components/Pagination"
import { Helmet } from "react-helmet"

import useMealPlan from "../hooks/useMealPlan"

const IndexPage = () => {

  const [recipes, setRecipes] = useState([]);
  const [mealPlan, setMealPlan] = useMealPlan([]);
  const [query, setQuery] = useState({
    instructionsRequired: true,
    addRecipeInformation: true,
    sort: "popularity",
    number: 12,
    offset: 0,
  });

  const updateQuery = (newQuery) => {

    if(newQuery) {

      window.scrollTo({ top: 0, behavior: 'smooth' });

      if(!newQuery.offset) {
        newQuery.offset = 0;
      }
      let parameters = Object.assign(query, newQuery);
      setQuery({...parameters});

    } else {

      // Clear recipe query
      setQuery({
        instructionsRequired: true,
        addRecipeInformation: true,
        sort: "popularity",
        number: 12,
        offset: 0,
      });

    }

  }

  const addRecipe = (recipe, day) => {
    setMealPlan(recipe, day);
  }

  const RecipeResults = ({recipes}) => {
    
    const ResultsCount = () => {
      return <p id="search-total-results">Your search returned {recipes.totalResults} recipes.</p>
    }

    if(recipes.totalResults > 0) {
      // If recipes, return recipe grid
      return  (
        <>
          <ResultsCount />
          <RecipeGrid recipes={recipes.results} actions={false} addRecipe={addRecipe} />
          <Pagination page={(query.offset / 12) + 1} perPage={12} total={recipes.totalResults} updateQuery={updateQuery} />
        </>
      )
    }

    // If no recipes, return
    return <ResultsCount />;

  }

  useEffect(() => {

      fetch('/.netlify/functions/recipes/complexSearch', {
        headers: {
          parameters: JSON.stringify(query)
        }
      })
          .then(
              response => response.json()
          )
          .then(
              data => {
                setRecipes(data);
              }
          );

  }, [query])

  return (
    <Layout>
      <Helmet>
        <body className="index" />
        <title>Meal Planning App</title>
        <meta name="icon" href="../images/favicon.png" />
      </Helmet>
      <RecipeFilters setQuery={updateQuery} query={query} />
      <Container className="recipe-grid-wrap">
        <RecipeResults recipes={recipes} />
      </Container>
    </Layout>
  )

}

export default IndexPage