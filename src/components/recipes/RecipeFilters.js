import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMediaQuery } from 'react-responsive'

export default function RecipeFilters({setQuery, query}) {

    let newQuery = {};

    const [search, setSearch] = useState(() => { return query.query || "" });
    const [type, setType] = useState(() => {return query.type || ""});
    const [intolerances, setIntolerances] = useState(() => {return query.intolerances || ""});

    const dishTypes = ['Breakfast', 'Brunch', 'Lunch', 'Dinner', 'Dessert', 'Appetizer', 'Side Dish', 'Main Course', 'Salad', 'Soup', 'Snack', 'Bread', 'Beverage', 'Drink'];
    const intolerancesOptions = ["Dairy", "Egg", "Gluten", "Grain", "Peanut", "Seafood", "Shellfish", "Wheat"];
    
    const handleTypeChange = (e) => {
        setType(e.currentTarget.value);
    }

    const handleSearchChange = (e) => {
        setSearch(e.currentTarget.value);
    }

    const handleIntolerancesChange = (e) => {
        setIntolerances(e.currentTarget.value);
    }

    const filterFormSubmit = (e) => {

        e.preventDefault();

        newQuery = {
            query: search || "",
            type: type || "",
            intolerances: intolerances || ""
        }

        setQuery(newQuery);

    }

    const FormButtons = () => {

        const Submit = () => {
            return (
                <button
                    onClick={(e) => filterFormSubmit(e)}
                    id="filter-submit"
                    aria-label="Submit search recipes form"
                >
                    <FontAwesomeIcon icon="search" />
                    Search
                </button>
            )
        }

        const Reset = () => {
            
            const handleClick = () => {
                setQuery();
                setSearch("");
                setType("");
                setIntolerances("");
            }

            return (
                <button
                    onClick={handleClick}
                    id="clear-filters"
                    className="clear-filters button-secondary"
                    aria-label="Reset Recipes"
                >
                    Reset
                </button>
            )

        }

        return (
            <div className="filter-buttons">
                <Submit />
                <Reset />
            </div>
        )
    }

    useEffect(() => {
        if (document.getElementById("filter-form")) {
            document.getElementById("recipe-filters").style.minHeight = document.getElementById("filter-form").offsetHeight + "px";
        }
    }, [FormButtons])

    return (
        <div className="recipe-filters" id="recipe-filters" >
            <form className="filter-form" id="filter-form">

                <div className="field-wrapper">
                    <label htmlFor="recipe-search">Search Recipes</label>
                    <input
                        type="text"
                        name="recipe-search"
                        placeholder="Search Recipes"
                        value={search}
                        onChange={(e) => handleSearchChange(e)}
                        aria-label="Search recipes"
                    />
                </div>

                <div className="field-wrapper">
                    <label htmlFor="dish-type">Dish Types</label>
                    <select
                        name="dish-type"
                        onChange={(e) => handleTypeChange(e)}
                        value={type}
                        aria-label="Filter recipes by dish type"
                    >
                        <option value="">Select Dish Type</option>
                        {dishTypes.sort().map(option => {
                            return <option key={option} value={option.toLowerCase()}>{option}</option>
                        })}
                    </select>
                </div>

                <div className="field-wrapper">
                    <label htmlFor="intolerances">Diet Restrictions</label>
                    <select
                        name="intolerances"
                        onChange={(e) => handleIntolerancesChange(e)}
                        value={intolerances}
                        aria-label="Exclude recipes from search"
                    >
                        <option value="">Select Diet Restriction</option>
                        {intolerancesOptions.sort().map(option => {
                            return <option key={option} value={option.toLowerCase()}>{option}</option>
                        })}
                    </select>
                </div>

                <FormButtons />

            </form>
        </div>
    )
}
