import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useMediaQuery } from 'react-responsive'

export default function RecipeFilters({setQuery, query}) {

    let newQuery = {
        parameters: {},
        filters: {},
    };

    const FilterIcons = ({query}) => {

        const [active, setActive] = useState(false);
        const isHidden = useMediaQuery({
            query: '(max-width: 992px)'
        });

        const checkIfActive = (filter) => {
            return (query[filter.type][filter.name] === filter.value) ? true : false;
        }

        const handleClick = (e, filterQuery) => {

            if(checkIfActive(filterQuery) && filterQuery.value !== "random") {
                setQuery({ name: filterQuery.name, type: filterQuery.type }, "remove");
            } else {
                newQuery[filterQuery.type][filterQuery.name] = filterQuery.value;
                setQuery(newQuery, "add");
            }

        }

        const FilterToggle = () => {

            const icon = active ? "times" : "filter";
            
            const handleClick = () => {

                setActive(!active);

                const filterIcons = document.getElementById("filter-icons");
                filterIcons.classList.toggle("active");

            }

            return (
                <span className="filters-toggle" onClick={handleClick} role="button"><FontAwesomeIcon icon={icon} /> Recipe Filters</span>
            )

        }

        const filters = [
            { label: "Shuffle Recipes", icon: "random", filterQuery: { name: "sort", value: "random", type: "parameters" } },
            { label: "Vegetarian", icon: "leaf", filterQuery: { name: "diet", value: "vegetarian", type: "parameters" } },
            { label: "Healthy", icon: "heart", filterQuery: { name: "veryHealthy", value: true, type: "filters" } },
            { label: "Quick & Easy", icon: "clock", filterQuery: { name: 'readyInMinutes', value: 30, type: "filters" } },
            { label: "Cheap", icon: "piggy-bank", filterQuery: { name: "cheap", value: true, type: "filters" } },
            { label: "Popular", icon: "star", filterQuery: { name: "veryPopular", value: true, type: "filters" } },
        ]

        useEffect(() => {

            const margin = (isHidden && active) ? document.getElementById("filter-icons").offsetHeight : 0;
            document.getElementById("recipe-filters").style.marginBottom = margin + "px";
            document.getElementById("filter-icons").style.bottom = -margin + "px";

        }, [isHidden, active])

        return (
            <>
                <FilterToggle />
                <ul className="filter-icons clear-list" id="filter-icons">
                    {filters.map(item => {
                        let active = (checkIfActive(item.filterQuery) && item.filterQuery.value !== "random") ? "active" : "";
                        return (
                            <li className={active} key={item.icon} onClick={ (e) => handleClick( e, item.filterQuery ) } role="button" >
                                <FontAwesomeIcon icon={item.icon} />
                                <span>{item.label}</span>
                            </li>
                        )
                    })}
                </ul>
            </>
        )
    }

    const FilterForm = () => {

        const [type, setType] = useState(() => {return query.parameters.type || ""});
        const [search, setSearch] = useState(() => {return query.parameters.query || ""});

        const dishTypes = ['Breakfast', 'Brunch', 'Lunch', 'Dinner', 'Dessert', 'Appetizer', 'Side Dish', 'Main Course', 'Salad', 'Soup', 'Snack', 'Bread', 'Beverage', 'Drink'];

        const handleTypeChange = (e) => {
            setType(e.currentTarget.value);
        }

        const handleSearchChange = (e) => {
            setSearch(e.currentTarget.value);
        }

        const filterFormSubmit = (e) => {

            e.preventDefault();

            newQuery.parameters.query = search || "";
            newQuery.parameters.type = type || "";
            setQuery(newQuery, "add");

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
                    </button>
                )
            }

            const Reset = () => {

                // Check if filters have been set
                if (Object.keys(query.filters).length || Object.keys(query.parameters).length) {
                    return (
                        <button
                            onClick={(e) => setQuery(null, "clear")}
                            id="clear-filters"
                            className="clear-filters button-secondary"
                            aria-label="Reset Recipes"
                        >
                            Reset
                        </button>
                    )
                }
                return null;

            }

            return (
                <div className="filter-buttons">
                    <Submit />
                    <Reset />
                </div>
            )
        }

        return (
            <form className="filter-form">

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
                        {dishTypes.sort().map(type => {
                            return <option key={type} value={type.toLowerCase()}>{type}</option>
                        })}
                    </select>
                </div>

                <FormButtons />

            </form>
        )

    }

    return (
        <div className="recipe-filters" id="recipe-filters">
            <FilterForm query={query} />
            <FilterIcons query={query} />
        </div>
    )
}
