import React, {useContext} from "react"
import { Context } from "./contextProvider"
import { useParams } from "react-router-dom"

function Info(){
    const { productList } = useContext(Context)
    const {infoId} = useParams()

    const itemInfo = productList.find(item => item.tag_id === infoId)
    return(
        <div>
            <h1>Product Information</h1>
            <h3>{itemInfo.food_name}</h3>
            <img src={itemInfo.photo.thumb} alt={itemInfo.food_name}/>
        </div>
    )
}

export default Info