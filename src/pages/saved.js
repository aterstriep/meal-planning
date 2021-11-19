import React from 'react'
import styled from 'styled-components';

import Layout from '../components/Layout'
import Container from '../components/Container'
import RecipeGrid from '../components/RecipeGrid';

const PageTitle = styled.h1`
    margin-top: 0;
`;

export default function savedRecipesPage() {

    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes"));

    return (
        <Layout>
            <PageTitle>Saved Recipes</PageTitle>
            <RecipeGrid recipes={savedRecipes} />
        </Layout>
    )
}
