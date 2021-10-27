import React, {useState, useEffect} from "react"
import axios from "axios"

const Context = React.createContext()


function ContextProvider(props){
    const [things, setThings] = useState([])

    useEffect(() => {
        axios.get("https://api.vschool.io/trenden/thing").then(res => {
            console.log(res.data)
            setThings(res.data)
        })
        .catch(err => console.log(err))
    }, [])


    const postThing = thing => {
        axios.post("https://api.vschool.io/trenden/thing", thing)
            .then(res => {
                console.log(res.data)
                setThings(prevThings => (
                    [...prevThings, thing]
                ));
            })
            .catch(err => console.log(err));
    }

    const putThing = (_id, updatedItem) => {
        axios.put(`https://api.vschool.io/trenden/thing/${_id}`, updatedItem)
            .then(res => {
                console.log(res)
                axios.get("https://api.vschool.io/trenden/thing").then(res => {
            console.log(res.data)
            setThings(res.data)
        })
    })
            .catch(err => console.log(err));
    }

    const deleteThing = (_id) => {
        axios.delete(`https://api.vschool.io/trenden/thing/${_id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    
    
        return(
            <Context.Provider
            value={{
                things: things,
                postThing,
                putThing,
                deleteThing
            }}
            >
            {props.children}
            </Context.Provider>
        )
}

export { Context, ContextProvider }