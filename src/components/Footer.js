import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {

    return (
        <footer>
            <FontAwesomeIcon icon="heart" />
            <p>Created by <a href="https://ashleyterstriep.com" target="_blank" rel="noreferrer">Ashley Terstriep</a> using <a href="https://spoonacular.com/food-api" target="_blank" rel="noreferrer">Spoonacular API</a></p>
        </footer>
    )
}

export default Footer