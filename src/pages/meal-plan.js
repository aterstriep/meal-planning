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

    console.log(mealPlan);

    const allowDrop = (e) => {
        e.preventDefault();
    }

    const drag = (e, recipe, day) => {
        e.dataTransfer.setData("recipe", JSON.stringify(recipe));
        e.dataTransfer.setData("day", day);
    }

    const drop = (e) => {

        e.preventDefault();
        const recipe = JSON.parse(e.dataTransfer.getData("recipe"));
        const day = e.dataTransfer.getData("day");
        const newDay = e.currentTarget.getAttribute("day");
        e.currentTarget.append(document.getElementById(recipe.id));

        setMealPlan(recipe, { previous: day, new: newDay }, "update");

    } 

    const MealPlanGrid = () => {
        
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        return days.map(day => {
            if (mealPlan[day]) {
                return (
                    <div key={day} day={day} className="day-container" onDrop={(e) => drop(e)} onDragOver={(e) => allowDrop(e)}>
                        <h2>{day}</h2>
                        {mealPlan[day].map(recipe => {
                            return (
                                <RecipeContainer draggable={true} day={day} onDragStart={drag} actions={false} recipe={recipe} key={recipe.id} >
                                    <span id="delete-recipe" onClick={(e) => setMealPlan(recipe, day, "delete")}>Delete</span>
                                </RecipeContainer>
                            )
                        })}
                    </div>
                )
            } else {
                return (
                    <div key={day} day={day} className="day-container" onDrop={(e) => drop(e)} onDragOver={(e) => allowDrop(e)}>
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
