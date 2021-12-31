import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../components/Layout'
import Container from '../components/Container'
import Badge from '../components/Badge';
import RecipeContainer from '../components/recipes/RecipeContainer';

import useCheckSavedRecipe from '../hooks/useCheckSavedRecipe';
import useSavedRecipes from '../hooks/useSavedRecipes';
import useMealPlan from '../hooks/useMealPlan';

const PageTitle = styled.h1`
    margin-top: 0;
`;

const MealPlanPage = () => {

    const [mealPlan, setMealPlan] = useMealPlan([]);

    const deleteRecipe = (recipe, day) => {
        setMealPlan(recipe, day, "delete");
    }

    const MealPlanGrid = () => {
        
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        return days.map(day => {
            if (mealPlan[day]) {
                return (
                    <div key={day} className="day-container">
                        <h2>{day}</h2>
                        {mealPlan[day].map(recipe => {
                            return (
                                <RecipeContainer actions={false} recipe={recipe} key={recipe.id} >
                                    <span id="delete-recipe" onClick={(e) => deleteRecipe(recipe, day)}>Delete</span>
                                </RecipeContainer>
                            )
                        })}
                    </div>
                )
            } else {
                return (
                    <div key={day} className="day-container">
                        <h2>{day}</h2>
                    </div>
                )
            }
        })

    }

    return (
        <Layout>
            <Container className="meal-plan">
                <PageTitle>Meal Plan</PageTitle>
                <div className="meal-plan-container">
                    <MealPlanGrid />
                </div>
            </Container>
        </Layout>
    )
}

export default MealPlanPage
