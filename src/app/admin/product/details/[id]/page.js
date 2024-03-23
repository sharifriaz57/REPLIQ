"use client"
import { AppContext } from "@/context/AppContext";
import { AppRequest } from "@/http/AxiosCall";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const page = () => {
    const params = useParams();
    const [product, setProduct] = useState([]);
    const { appData, handleCart, removeFromCart } = useContext(AppContext);
    const {carts} = appData;

    const fetchData = async () => {
        const res = await AppRequest.AxiosGet(`products/${params.id}`);

        if (typeof res.error == 'undefined') {
            setProduct(res);
        }
    }

    useEffect(() => {
        fetchData()
    }, [params])

    return (
        <>
            <h4 className='text-2xl font-semibold text-center mb-4'>Product Details</h4>

            <div className="w-full">
                <div className="relative w-32 h-32 mx-auto mb-2">
                    <Image src={product.thumbnail} alt="img" layout='fill' objectFit='cover' />
                </div>
                <h3 className='text-2xl font-light text-center mb-3'>{product.title}</h3>

                <div className="grid grid-rows-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-3">
                    <div className="flex items-center py-1 border-b border-slate-300">
                        <div className="w-28 shrink-0 text-black text-sm font-semibold">Title</div>
                        <div className="flex-auto text-slate-800 text-sm text-light capitalize">{product.title}</div>
                    </div>
                    <div className="flex items-center py-1 border-b border-slate-300">
                        <div className="w-28 shrink-0 text-black text-sm font-semibold">Category</div>
                        <div className="flex-auto text-slate-800 text-sm text-light capitalize">{product.category}</div>
                    </div>
                    <div className="flex items-center py-1 border-b border-slate-300">
                        <div className="w-28 shrink-0 text-black text-sm font-semibold">Brand</div>
                        <div className="flex-auto text-slate-800 text-sm text-light capitalize">{product.brand}</div>
                    </div>
                    <div className="flex items-center py-1 border-b border-slate-300">
                        <div className="w-28 shrink-0 text-black text-sm font-semibold">Price</div>
                        <div className="flex-auto text-slate-800 text-sm text-light capitalize">$<strong>{product.price}</strong></div>
                    </div>
                    <div className="flex items-center py-1 border-b border-slate-300">
                        <div className="w-28 shrink-0 text-black text-sm font-semibold">Rating</div>
                        <div className="flex-auto text-slate-800 text-sm text-light capitalize">{product.rating}</div>
                    </div>
                    <div className="flex items-center py-1 border-b border-slate-300">
                        <div className="w-28 shrink-0 text-black text-sm font-semibold">Stock</div>
                        <div className="flex-auto text-slate-800 text-sm text-light capitalize">{product.stock}</div>
                    </div>
                    <div className="col-span-2 flex items-center py-1 border-b border-slate-300">
                        <div className="w-28 shrink-0 text-black text-sm font-semibold">Description</div>
                        <div className="flex-auto text-slate-800 text-sm text-light capitalize">{product.description}</div>
                    </div>
                    <div className="flex items-center py-1 border-b border-slate-300">
                        <div className="w-28 shrink-0 text-black text-sm font-semibold">Discount (%)</div>
                        <div className="flex-auto text-slate-800 text-sm text-light capitalize">{product.discountPercentage}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page