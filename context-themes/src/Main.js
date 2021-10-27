import React from "react"
import Button from "./Button"
import {ThemeContextConsumer} from "./themeContext"

import "./styles.css"

function Main() {
    return(
        <ThemeContextConsumer>
            {context => (
                <div className="main" id={`${context.theme}-main`}>
                    <h1>Click the button to toggle the theme!</h1>
                    <Button />
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Main