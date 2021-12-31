import * as React from "react"
import { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import "normalize.css"
import "../stylesheets/main.scss"

import Footer from "./Footer"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLeaf, faHeart, faClock, faPiggyBank, faStar, faRandom, faSearch, faAngleLeft, faAngleRight  } from '@fortawesome/free-solid-svg-icons'
library.add(faLeaf, faHeart, faClock, faPiggyBank, faStar, faRandom, faSearch, faAngleLeft, faAngleRight )

const Layout = ({ children, className, hideSidebar }) => {

    const [hasSidebar, setHasSidebar] = useState(true);

    // If sidebar is visible, add class to wrapper div
    const layoutClass = hasSidebar ? `page-wrapper has-sidebar ${className}` : `page-wrapper ${className}`;

    // Sidebar markup
    const Sidebar = () => {
        if(hasSidebar) {
            return (
                <div className="sidebar">
                    <div className="sidebar-inner">
                        <ul className="sidebar-menu clear-list">
                            <li className="sidebar-hoverable"><Link to="/" >All Recipes</Link></li>
                            <li className="sidebar-hoverable"><Link to="/saved">Saved Recipes</Link></li>
                            <li className="sidebar-hoverable"><Link to="/meal-plan">Meal Plan</Link></li>
                        </ul>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }

    useEffect(() => {

        // Hide sidebar if prop is set
        if(hideSidebar) {
            setHasSidebar(false);
        }

    }, [])
    
    return (
        <div className={layoutClass}>
            <Sidebar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout