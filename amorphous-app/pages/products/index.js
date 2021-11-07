import axios from "axios"
import { route } from "../api/products/fetchAllProducts"
import { useEffect, useState } from "react"

export default function Products() {
    const[products, setProducts] = useState([{name: 'test'}])

    const fetchProducts = async () => {
        const products = await axios.get(route)
        setProducts(products.data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>{products ? products.map((product) => <li>{product.name}</li>) : <></>}</div>
    )
}