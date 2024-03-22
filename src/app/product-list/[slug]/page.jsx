"use client"
import SingleProduct from '@/app/components/SingleProduct';
import { AppRequest } from '@/http/AxiosCall';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const page = () => {
    const params = useParams();
    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        const endpoint = params.slug && params.slug == 'all' ? `products` : `products/category/${params.slug}`;
		const res = await AppRequest.AxiosGet(endpoint);

		if (typeof res.error == 'undefined') {
            console.log(params, res);
			setProducts(res.products);
		}
	}

    useEffect(() => {
        fetchData()
    }, [params])

    return (
        <div className='min-h-screen py-10 container mx-auto'>
            <h3 className="text-4xl font-bold text-slate-700 mb-6">Product List </h3>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                {products.map(product => <SingleProduct key={product.id} product={product} />)}

            </div>
        </div>
    )
}

export default page