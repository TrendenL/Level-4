import React, {useState} from "react"
import axios from "axios"
const Context = React.createContext()

function ContextProvider(props){

    const [ productInput, setProductInput ] = useState({item: ""})
    const [ productData, setProductData ] = useState([])

    const [ productList, setProductList] = useState([])

    const handleChange = (e) => {
        const {name, value} = e.target
        setProductInput(prevInputData => {
            return {
                ...prevInputData,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
            axios.get(`https://trackapi.nutritionix.com/v2/search/instant?query=${productInput.item}`, {
                'headers': {
                    "x-app-id": process.env.REACT_APP_NUTRITION_API_ID,
                    "x-app-key": process.env.REACT_APP_NUTRITION_API_KEY
                }
            })
            .then(res => {
                const foodItem = res.data.common.filter(item => item.food_name === productInput.item)
                setProductData(foodItem)
            })
            .catch(err => {
                console.log(err)
            })
        }

    const handleClick = (e) => {
        e.preventDefault()
        setProductList(prevProductList => [...prevProductList, ...productData])
    }

    const deleteProduct = (tag_id) => {
        setProductList(prevProducts => {
            const updateProductList = prevProducts.filter(product => {
                if(tag_id !== product.tag_id){
                    return true
                } else {
                    return false
                }
            })
            return updateProductList
        })
    }

    return(
        <Context.Provider
        value={{
            productInput: productInput,
            setProductInput,
            productData: productData,
            productList: productList, 
            setProductData,
            handleChange,
            handleSubmit,
            handleClick,
            deleteProduct
        }}>
            {props.children}

        </Context.Provider>
    )
}

export { ContextProvider, Context }