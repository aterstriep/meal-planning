import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import "../stylesheets/main.scss"
import "normalize.css"
import Footer from "./Footer"

const Layout = ({ children, className }) => {
    
    return (
        <div className={className}>
            <nav className="main-nav nav-horizontal nav-right">
                <Link to="/">Meal Planning App</Link>
            </nav>
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout