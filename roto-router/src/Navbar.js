import React from "react"
import { Link, Switch, Route } from "react-router-dom"

import Home from "./Components/Home"
import About from "./Components/About"
import Services from "./Components/Services"

function Navbar(){
    return(
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
            </nav>

            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/about"><About /></Route>
                <Route path="/services"><Services /></Route>
            </Switch>
        </div>
    )
}

export default Navbar