import React, {useState, useContext} from "react"
import Item from "./Item"
import { Context } from "./contextProvider"

function Form(){
    const initInputs = {
        title: "",
        description: "",
        imgUrl: ""
    }

    const [inputData, setInputData] = useState(initInputs)

    const { things, postThing } = useContext(Context)

    function handleChange(e){
        const {name, value} = e.target
        setInputData(prevInput => ({...prevInput, [name]: value}))
    }

    function handleSubmit(e){
        e.preventDefault()

        const newThing = { 
            title: inputData.title,
            description: inputData.description,
            imgUrl: inputData.imgUrl
        }

        postThing(newThing)
    }


    const mappedInputs = things.map(item => <Item key={item._id} item={item}/>)
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Title"
                name="title"
                value={inputData.title}
                onChange={handleChange}
                />

                <input 
                type="text"
                placeholder="Description"
                name="description"
                value={inputData.description}
                onChange={handleChange}
                />

                <input 
                type="text"
                placeholder="ImgURL"
                name="imgUrl"
                value={inputData.imgUrl}
                onChange={handleChange}
                />

                <button type="submit">Submit</button>
            </form>
                {mappedInputs}
        </div>
    )
}

export default Form