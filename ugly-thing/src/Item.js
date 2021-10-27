import React, {useState, useContext} from "react"
import { Context } from "./contextProvider"

function Item(props){
    const { putThing, deleteThing } = useContext(Context)

    const initItems = {
        title: props.item.title,
        description: props.item.description,
        imgUrl: props.item.imgUrl
    }

    const [inputItem, setInputItem] = useState(initItems)
    const [isEdit, setIsEdit] = useState(false)

    function handleChange(e){
        const {name, value} = e.target
        setInputItem(prevItem =>{
            return{
                ...prevItem,
                [name] : value
            }
        } 
        )
    }

    function toggleEdit(e){
        e.preventDefault()
        setIsEdit(prevEdit => !prevEdit)
    }

    function handleSubmit(e){
        e.preventDefault()

        const updatedItem = { 
            title: inputItem.title,
            description: inputItem.description,
            imgUrl: inputItem.imgUrl
        }

        putThing(props.item._id,updatedItem)
    }

    function handleDelete(e){
        e.preventDefault()

        deleteThing(props.item._id)
    }

    return(
        <div>
            {
                isEdit ?

                    <form onSubmit={handleSubmit}>
                        <input 
                        type="text" 
                        placeholder="Title"
                        name="title"
                        value={inputItem.title}
                        onChange={handleChange}/>

                        <input 
                        type="text" 
                        placeholder="Description"
                        name="description"
                        value={inputItem.description}
                        onChange={handleChange}/>

                        <input 
                        type="text" 
                        placeholder="ImgUrl"
                        name="imgUrl"
                        value={inputItem.imgUrl}
                        onChange={handleChange}/>
                        <button type="submit">Submit</button>
                    </form>
                    
                    :

                    <div>
                        <h2>{props.item.title}</h2>
                        <p>{props.item.description}</p>
                        <img src={props.item.imgUrl} alt="img" width="300"/>
                    </div>
            }
            <button onClick={toggleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Item