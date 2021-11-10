import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import Nav from "./Nav"


function App(){
    return(
        <ChakraProvider>
            <div>
                <Nav />
            </div>
        </ChakraProvider>
    )
}

export default App