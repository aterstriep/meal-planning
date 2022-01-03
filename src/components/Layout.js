import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"

import "normalize.css"
import "../stylesheets/main.scss"

import Footer from "./Footer"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLeaf, faHeart, faClock, faPiggyBank, faStar, faRandom, faSearch, faAngleLeft, faAngleRight, faBars, faCalendarCheck, faTimes, faFilter  } from '@fortawesome/free-solid-svg-icons'
library.add(faLeaf, faHeart, faClock, faPiggyBank, faStar, faRandom, faSearch, faAngleLeft, faAngleRight, faBars, faCalendarCheck, faTimes, faFilter )


const Layout = ({ children, className, hideSidebar }) => {

    const [hasSidebar, setHasSidebar] = useState(true);

    // If sidebar is visible, add class to wrapper div
    const layoutClass = hasSidebar ? `page-wrapper has-sidebar ${className}` : `page-wrapper ${className}`;

    const MenuToggle = () => {

        const [menuActive, setMenuActive] = useState(false);

        const triggerMenu = (e) => {
            document.getElementById("sidebar-inner").classList.toggle("active");
            setMenuActive(!menuActive);
        }

        const icon = menuActive ? "times" : "bars";

        return (
            <span className="menu-toggle"><FontAwesomeIcon icon={icon} onClick={(e) => triggerMenu(e)} /></span>
        )

    }

    // Sidebar markup
    const Sidebar = () => {
        if(hasSidebar) {
            return (
                <div className="sidebar">
                    <MenuToggle />
                    <div className="sidebar-inner" id="sidebar-inner">
                        <ul className="sidebar-menu clear-list">
                            <li className="sidebar-hoverable"><Link to="/" ><FontAwesomeIcon icon="search" className="mobile-menu-icon" /> <span className="menu-item-text">All Recipes</span></Link></li>
                            <li className="sidebar-hoverable"><Link to="/saved"><FontAwesomeIcon icon="heart" className="mobile-menu-icon" /> <span className="menu-item-text">Saved Recipes</span></Link></li>
                            <li className="sidebar-hoverable"><Link to="/meal-plan"><FontAwesomeIcon icon="calendar-check" className="mobile-menu-icon" /> <span className="menu-item-text">Meal Plan</span></Link></li>
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

    }, [hideSidebar])
    
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