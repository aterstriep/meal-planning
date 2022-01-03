import * as React from "react"
import { useState, useEffect } from "react"
import Layout from '../components/Layout'
import Container from '../components/Container'
import RecipeGrid from '../components/recipes/RecipeGrid'
import RecipeFilters from "../components/recipes/RecipeFilters"
import { Helmet } from "react-helmet"

import config from "../../config.json";

import useMealPlan from "../hooks/useMealPlan"

const IndexPage = () => {

  const [recipes, setRecipes] = useState([]);
  const [mealPlan, setMealPlan] = useMealPlan([]);
  const [query, setQuery] = useState({
    parameters: {
      sort: "popularity",
    },
    filters: {},
  });

  const updateQuery = (newQuery, action) => {

    if(newQuery && action === "add") {

      // Add parameters
      let parameters = Object.assign(query.parameters, newQuery.parameters);
      newQuery.parameters = parameters;

      // Add filters
      let filters = Object.assign(query.filters, newQuery.filters);
      newQuery.filters = filters;

      setQuery(newQuery);

    } else if (newQuery && action === "remove") {

      // Remove query
      let updatedQuery = {...query};
      delete updatedQuery[newQuery.type][newQuery.name];
      setQuery(updatedQuery);

    } else {

      // Clear recipe query
      setQuery({
        parameters: {
          sort: "popularity",
        },
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
        if ( item[0] === "readyInMinutes" ) {
          return recipe[item[0]] <= item[1];
        } else {
          return recipe[item[0]] === item[1];
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
      return <p>No recipes found. Please <span role="button" className="clear-filters" onClick={() => updateQuery(null, "clear")}>clear filters</span> or try a new search.</p>;
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

    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${config.keys.spoonacular}&addRecipeInformation=true&instructionsRequired=true&number=24${queryParams}`)
        .then(
            response => response.json()
        )
        .then(
            data => {
              const filters = Object.entries(query.filters);
              const filteredRecipes = filters.length ? filterRecipes(filters, data.results) : data.results;
              setRecipes(filteredRecipes);
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
        <RecipeResults recipes={recipes} pagination={true} />
      </Container>
    </Layout>
  )

}

export default IndexPage