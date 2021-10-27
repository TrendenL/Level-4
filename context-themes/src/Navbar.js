import React from "react"
import {ThemeContextConsumer} from "./themeContext"

import "./styles.css"

function Navbar() {
    return(
        <ThemeContextConsumer>
            {context => (
                <div>
                    <ul className="nav" id={`${context.theme}-nav`}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Navbar