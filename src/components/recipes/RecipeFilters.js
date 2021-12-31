import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function RecipeFilters({setQuery, query}) {

    let newQuery = {
        parameters: {},
        filters: {},
    };

    // console.log(query);

    const FilterIcons = ({query}) => {

        const checkIfActive = (filter) => {
            return query[filter.type][filter.name] ? true : false;
        }

        const handleClick = (e, filterQuery) => {

            // if(checkIfActive(filterQuery) && !filterQuery.value == "random") {
            if(checkIfActive(filterQuery)) {
                console.log("remove");
                setQuery({ name: filterQuery.name, type: filterQuery.type }, "remove");
            } else {
                console.log("add");
                newQuery[filterQuery.type][filterQuery.name] = filterQuery.value;
                setQuery(newQuery, "add");
            }

        }

        const filters = [
            { label: "Shuffle Recipes", icon: "random", filterQuery: { name: "sort", value: "random", compare: "&", type: "parameters" } },
            { label: "Vegetarian", icon: "leaf", filterQuery: { name: "diet", value: "vegetarian", compare: "&", type: "parameters" } },
            { label: "Healthy", icon: "heart", filterQuery: { name: "veryHealthy", value: true, compare: "==", type: "filters" } },
            { label: "Quick & Easy", icon: "clock", filterQuery: { name: 'readyInMinutes', value: 30, compare: "<=", type: "filters" } },
            { label: "Cheap", icon: "piggy-bank", filterQuery: { name: "cheap", value: true, compare: "==", type: "filters" } },
            { label: "Popular", icon: "star", filterQuery: { name: "veryPopular", value: true, compare: "==", type: "filters" } },
        ]

        return (
            <ul className="filter-icons clear-list">
                {filters.map(item => {
                    let active = checkIfActive(item.filterQuery) ? "active" : "";
                    return (
                        <li className={active} key={item.icon} onClick={ (e) => handleClick( e, item.filterQuery ) } >
                            <FontAwesomeIcon icon={item.icon} />
                            <span>{item.label}</span>
                        </li>
                    )
                })}
            </ul>
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
                    <label htmlFor="dish-type">Filter by Dish Type</label>
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
        <div className="recipe-filters">
            <FilterForm query={query} />
            <FilterIcons query={query} />
        </div>
    )
}
