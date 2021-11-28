import React from 'react'
import styled from 'styled-components';

import Layout from '../components/Layout'
import Container from '../components/Container'
import RecipeGrid from '../components/RecipeGrid';

import useSavedRecipes from '../hooks/useSavedRecipes';

const PageTitle = styled.h1`
    margin-top: 0;
`;

const SavedRecipesPage = () => {

    const [saved, setSaved] = useSavedRecipes([]);

    const setSavedRecipes = (recipe) => {
        setSaved(recipe);
    }

    return (
        <Layout>
            <Container>
                <PageTitle>Saved Recipes</PageTitle>
                <RecipeGrid recipes={saved} setSavedRecipes={setSavedRecipes} />
            </Container>
        </Layout>
    )
}

export default SavedRecipesPage
