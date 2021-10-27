import React from "react"
import {ThemeContextConsumer} from "./themeContext"

import "./styles.css"

function Footer() {
    return(
        <ThemeContextConsumer>
            {context => (
                <div className="footer" id={`${context.theme}-footer`}>
                    <h3>The Amazing Footer</h3>
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Footer