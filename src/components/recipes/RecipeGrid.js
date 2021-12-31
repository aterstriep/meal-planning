import * as React from "react"
import { useEffect, useState } from "react"

import RecipeContainer from "./RecipeContainer";
import MealPlanModal from "./MealPlanModal";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const RecipeGrid = ({ recipes, actions = ['add', 'save'], saveRecipe, addRecipe}) => {

    const [modalRecipe, setModalRecipe] = useState([]);
    const [page, setPage] = useState(1);

    const triggerMealPlanModal = (recipe) => {
        setModalRecipe(recipe);
        document.getElementById("meal-plan-modal").style.display = "flex";
    }

    const Grid = ({perPage}) => {

        const [page, setPage] = useState(1);
        const [pagedRecipes, setPagedRecipes] = useState(recipes);

        let pages = Math.ceil(Object.keys(recipes).length / perPage);

        const Pagination = () => {

            const Numbers = () => {

                let numbers = [];

                if(pages < 5) {
                    for(let i = 1; i <= pages; i++) {
                        numbers.push(i);
                    }
                } else {
                    if (page == 1) {
                        numbers = [1, 2, 3, "...", pages];
                    } else if (page > (pages - 3)) {
                        numbers = [1, "...", pages - 2, pages - 1, pages];
                    } else {
                        numbers = [page - 1, page, page + 1, "...", pages];
                    }
                }

                return numbers.map(number => {
                    let active = number == page ? "active" : "";
                    let disabled = number == "..." ? "disabled" : "";
                    return <li key={number} className={`${active} ${disabled}`} onClick={() => setPage(number)}>{number}</li>
                });

            }

            if(perPage) {
                return (
                    <ul className="pagination clearList">
                        <li className={page == 1 ? "disabled" : ""} onClick={() => setPage(page - 1)}><FontAwesomeIcon icon="angle-left" /></li>
                        <Numbers />
                        <li className={page == pages ? "disabled" : ""} onClick={() => setPage(page + 1)}><FontAwesomeIcon icon="angle-right" /></li>
                    </ul>
                )
            }
            return null;

        }

        useEffect(() => {
            if(perPage) {
                setPagedRecipes(recipes.filter((recipe, index) => {
                    index++;
                    return (index >= (page - 1) * perPage + 1) && (index <= perPage * page);
                }));
            }
        }, [page])

        return (
            <>
                <div className="recipe-grid">
                    {pagedRecipes.map(recipe => {
                        return (
                            <RecipeContainer key={recipe.id} recipe={recipe} actions={actions} saveRecipe={saveRecipe} addRecipe={triggerMealPlanModal}  />
                        );
                    })}
                </div>
                <Pagination />
            </>
        )
    }

    return (
        <>
            <MealPlanModal recipe={modalRecipe} addRecipe={addRecipe}  />
            <Grid perPage={6} />
        </>
    )
}

export default RecipeGrid
