import React, { useContext } from "react"
import { Context } from "./contextProvider"
import { Flex, Button, Input, AspectRatio, Heading, Image } from "@chakra-ui/react"

function Home(props){

    const { productInput,
            productData,
            handleChange, 
            handleSubmit,
            handleClick} = useContext(Context)

        const productDataMapped = productData.map( item => 
        <div key={item.tag_id}>
            <Heading size="3xl">
                <h3>{item.food_name}</h3>
            </Heading>
            <AspectRatio maxW="600px" ratios={4 / 3}>
            <Image borderRadius="lg" mt="10" src={item.photo.thumb} alt="food item"/>
            </AspectRatio>
            <Button colorScheme="green" onClick={handleClick}>Add</Button>
        </div> )


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <Flex>
                    <Input m="20"
                    type="text"
                    placeholder="search"
                    name="item"
                    value={productInput.item}
                    onChange={handleChange}
                    />
                    <Button colorScheme="blue" type="submit">Enter</Button>
                </Flex>
            </form>
            {productDataMapped}
        </div>
    )
}

export default Home