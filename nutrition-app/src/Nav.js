import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import { Container, Flex, Spacer } from "@chakra-ui/react"

import Home from "./Home"
import List from "./List"
import Info from "./Info"

function Nav(){
    return(
        <div>
            <Container maxW="xl">
            <Flex flexDirection="row">
            
                    
                        <Link to="/">Home</Link>
                    
                    <Spacer />

                        <h3>Nutritonal</h3>
                    
                    <Spacer />
                    
                        <Link to="/list">List</Link>
            </Flex>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/list">
                    <List />
                </Route>
                <Route path="/info/:infoId">
                    <Info />
                </Route>
            </Switch>
            </Container>
        </div>
    )
}

export default Nav