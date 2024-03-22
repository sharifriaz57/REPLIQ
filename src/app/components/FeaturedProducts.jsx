"use client"
import { AppRequest } from "@/http/AxiosCall";
import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";


const FeaturedProducts = () => {
    const [featuredProducts, setfeaturedProducts] = useState([]);

    const fetchData = async () => {
        const res = await AppRequest.AxiosGet('products?limit=10');

        if (typeof res.error == 'undefined') {
            setfeaturedProducts(res.products);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {featuredProducts.map(product => <SingleProduct key={product.id} product={product} />)}
        </div>
    )
}

export default FeaturedProducts