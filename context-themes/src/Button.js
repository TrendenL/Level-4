import React from "react"
import {ThemeContextConsumer} from "./themeContext"
import "./styles.css"

function Button() {
    return (
        <ThemeContextConsumer>
            {context => (
                <div>
                    <button onClick={context.toggleTheme} id={`${context.theme}-btn`}>Toggle Theme</button>
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Button