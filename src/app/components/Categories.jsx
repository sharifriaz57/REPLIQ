"use client"
import { AppRequest } from "@/http/AxiosCall";
import { useEffect, useState } from "react";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    const fetchData = async () => {
		const res = await AppRequest.AxiosGet('products/categories');

		if (typeof res.error == 'undefined') {
			setCategories(res);
		}
	}

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {categories.map(category => (
                <div className="bg-white px-4 py-6 rounded-md">
                    <h5 className="text-lg text-center font-medium uppercase">{category}</h5>
                </div>
            ))}
        </div>
    )
}

export default Categories