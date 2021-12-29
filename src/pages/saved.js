import React from 'react'
import styled from 'styled-components';

import Layout from '../components/Layout'
import Container from '../components/Container'
import RecipeGrid from '../components/recipes/RecipeGrid';

import useSavedRecipes from '../hooks/useSavedRecipes';
import useMealPlan from '../hooks/useMealPlan';

const PageTitle = styled.h1`
    margin-top: 0;
`;

const SavedRecipesPage = () => {

    const [savedRecipes, setSavedRecipes] = useSavedRecipes([]);
    const [mealPlan, setMealPlan] = useMealPlan([]);

    const addRecipe = (recipe) => {
        setMealPlan(recipe);
    }

    return (
        <Layout>
            <Container>
                <PageTitle>Saved Recipes</PageTitle>
                <RecipeGrid recipes={savedRecipes} actions={['save']} saveRecipe={setSavedRecipes} addRecipe={addRecipe} />
            </Container>
        </Layout>
    )
}

export default SavedRecipesPage
