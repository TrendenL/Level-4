import React from "react"
import ReactDOM from  "react-dom"
import App from "./App.js"

import {ThemeContextProvider} from "./themeContext"

ReactDOM.render(
<ThemeContextProvider>
    <App />
</ThemeContextProvider>,
document.getElementById("root"))