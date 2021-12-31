import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {

    return (
        <footer>
            <FontAwesomeIcon icon="heart" />
            <p>Created by <a href="https://ashleyterstriep.com" target="_blank">Ashley Terstriep</a> using React, Gatsby, and Spoonacular API</p>
        </footer>
    )
}

export default Footer