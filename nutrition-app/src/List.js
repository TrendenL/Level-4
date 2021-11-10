import React, { useContext } from "react"
import { Context } from "./contextProvider"
import { Link } from "react-router-dom"
import { Heading, Grid, AspectRatio, Button } from "@chakra-ui/react"

function List(props){

    const { productList, deleteProduct } = useContext(Context)
    console.log(productList)

    const productListMapped = productList.map( item => (
        <div>
            
            <Heading size="2xl">
            <h3 key={item.tag_id + 2}>
                <Link to={`/info/${item.tag_id}`}>{item.food_name}</Link>
            </h3>
            </Heading>
            <AspectRatio maxW="400px">
                <img src={item.photo.thumb} alt={item.food_name}/>
            </AspectRatio>
            <Button colorScheme="red" onClick={function handleDelete(){ return (deleteProduct(item.tag_id))}}>Delete</Button>
            
        </div>
        ))

    return(
        <div>
            <h1>List</h1>
            <Grid templateColumns="repeat(4, 1fr)" gap={5}>
            {productListMapped}
            </Grid>
        </div>
    )
}

export default List