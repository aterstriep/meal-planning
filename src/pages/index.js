import * as React from "react"
import { useState, useEffect, useReducer } from "react"
import Layout from '../components/Layout'
import Container from '../components/Container'
import RecipeGrid from '../components/recipes/RecipeGrid'
import RecipeFilters from "../components/recipes/RecipeFilters"

import config from "../../config.json";

import useMealPlan from "../hooks/useMealPlan"

const IndexPage = () => {

  const [recipes, setRecipes] = useState([]);
  const [mealPlan, setMealPlan] = useMealPlan([]);
  const [query, setQuery] = useState({
    parameters: {},
    filters: {},
  });
  
  console.log(query);

  const updateQuery = (newQuery, action) => {

    if(newQuery && action == "add") {

      // Add parameters
      let parameters = Object.assign(query.parameters, newQuery.parameters);
      newQuery.parameters = parameters;

      // Add filters
      let filters = Object.assign(query.filters, newQuery.filters);
      newQuery.filters = filters;

      setQuery(newQuery);

    } else if (newQuery && action == "remove") {

      // Remove query
      let updatedQuery = {...query};
      delete updatedQuery[newQuery.type][newQuery.name];
      setQuery(updatedQuery);

    } else {

      // Clear recipe query
      setQuery({
        parameters: { },
        filters: { },
      });

    }

  }

  const addRecipe = (recipe, day) => {
    setMealPlan(recipe, day);
  }

  const filterRecipes = (filters, recipes) => {
    
    filters.forEach((item, index) => {
      recipes = recipes.filter(recipe => {
        if ( item[0] == "readyInMinutes" ) {
          return recipe[item[0]] <= item[1];
        } else {
          return recipe[item[0]] == item[1];
        }
      })
    });

    return recipes;

  }

  const RecipeResults = ({recipes}) => {

    if(recipes.length) {
      // If recipes, return recipe grid
      return <RecipeGrid recipes={recipes} actions={false} addRecipe={addRecipe} />
    } else if ( !recipes.length && (Object.keys(query.filters).length || Object.keys(query.parameters).length) ) {
      // If no recipes but query has been set, return
      return <p>No recipes found. Please <span className="clear-filters" onClick={() => updateQuery(null, "clear")}>clear filters</span> or try a new search.</p>;
    }

    // If no recipes or query, return
    return null;

  }

  useEffect(() => {

    // Set query parameters from state
    let queryParams = "";
    for (const [key, value] of Object.entries(query.parameters)) {
      queryParams = queryParams.concat(`&${key}=${value}`);
    }

    // fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${config.keys.spoonacular}&addRecipeInformation=true${queryParams}`)
    //     .then(
    //         response => response.json()
    //     )
    //     .then(
    //         data => {
    //             setRecipes(data.results);
    //             localStorage.setItem("recipes", JSON.stringify(data.results));
    //         }
    //     );


    // TEST VALUES - REMOVE BEFORE LIVE
    let testRecipes = JSON.parse(localStorage.getItem("recipes"));

    // Filter recipes - MOVE TO FETCH REQUEST
    const filters = Object.entries(query.filters);
    testRecipes = filters.length ? filterRecipes(filters, testRecipes) : testRecipes;

    setRecipes(testRecipes);
    
  }, [query])

  return (
    <Layout>
      <RecipeFilters setQuery={updateQuery} query={query} />
      <Container className="recipe-grid-wrap">
        <RecipeResults recipes={recipes} pagination={true} />
      </Container>
    </Layout>
  )

}

export default IndexPage
