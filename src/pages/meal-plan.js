import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../components/Layout'
import Container from '../components/Container'
import Badge from '../components/Badge';

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

    const RecipeContainer = ({recipe}) => {

        return (
            <div
                className={`recipe-container`}
                recipe_id={recipe.id}
                key={recipe.id}
            >
                <div className="recipe-grid-actions">
                </div>
                <Link to={`/recipe?${recipe.id}`} state={{ activeRecipe: recipe.id }}>
                    <img src={recipe.image} />
                </Link>
                <Container className="mealtypes" padding="0px">
                    {recipe.dishTypes.map((type, index) => {
                        return <Badge key={index}>{type}</Badge>
                    })}
                </Container>
                <Link to={`/recipe?${recipe.id}`} state={{ activeRecipe: recipe.id }}><h3>{recipe.title}</h3></Link>
            </div>
        )
    }

    const MealPlanGrid = () => {
        
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        return days.map((day, index) => {
            if (mealPlan[day]) {
                return (
                    <div key={index}>
                        <h2>{day}</h2>
                        {mealPlan[day].map((recipe, index) => {
                            return (
                                <div key={index} className="recipe">
                                    <p className="recipe-title">{recipe.title}</p>
                                    <span id="delete-recipe" onClick={(e) => deleteRecipe(recipe, day)}>Delete</span>
                                </div>
                            )
                        })}
                    </div>
                )
            } else {
                return (
                    <div key={index}>
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
                <MealPlanGrid />
            </Container>
        </Layout>
    )
}

export default MealPlanPage
