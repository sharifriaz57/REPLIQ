"use client"
import Header from "@/app/components/Header";
import { AppContext } from "@/context/AppContext";
import { AppRequest } from "@/http/AxiosCall";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";
import Rating from "react-rating";

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
            <Header />

            <div className="container grid grid-cols-1 lg:grid-cols-2 py-10 mx-auto">
                <div className='col-span-1 relative overflow-hidden'>
                    <Image src={product.thumbnail} alt='product-img' layout='fill' objectFit='cover' />
                </div>
                <div className="col-span-1 py-5 lg:py-14 px-2 md:px-8 lg:px-10 xl-px-14">
                    <div className="text-sm capitalize text-slate-500 mb-1 md:mb-2">{product.category ?? ''}</div>
                    <h2 className="text-3xl md:text-4xl font-bold capitalize mb-3 md:mb-5 leading-snug">
                        {product.title ?? ''}
                    </h2>

                    <div className="flex items-center mb-5">
                        <Rating emptySymbol={<AiOutlineStar />} fullSymbol={<AiFillStar className="text-secondary" />} initialRating={product.rating}
                            readonly fractions={2} className='text-xl mr-1 !leading-none'
                        />
                        
                        <span className='text-base leading-snug ml-4'>({product.rating})</span>
                    </div>

                    <div className="text-2xl font-medium">{product.price} USD</div>

                    <p className="text-base mt-4 mb-6">{product.description ?? ''}</p>

                    <div className="flex items-center">
                        {carts.products.findIndex(prod => prod.id == product.id) == -1
                            ? <button className="px-6 py-2 bg-primary hover:bg-secondary" 
                            onClick={() => handleCart(product, 'add')}>Add To Cart</button>
                            
                            : <div className="flex items-center gap-3 mr-4">
                                <button className="h-9 w-9 rounded-full flex items-center justify-center bg-white" onClick={e => handleCart(product, 'subtract')}>
                                    <LuMinus className="text-lg" /></button>

                                <input type="number" disabled={true} className="w-16 h-10 p-2 border-2 outline-none text-center bg-white" value={carts.products.find(item => product.id == item.id)?.quantity} />

                                <button className="h-9 w-9 rounded-full flex items-center justify-center bg-white" onClick={e => handleCart(product, 'add')}>
                                    <FiPlus className="text-lg" /></button>

                                <button className="px-6 py-2 bg-red-400 hover:bg-red-500" 
                                    onClick={() => removeFromCart(product)}>Remove From Cart</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default page