import { AppContext } from "@/context/AppContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";
import ProductQuantityHandle from "./ProductQuantityHandle";

const CartProduct = ({ product }) => {
    const {  removeFromCart } = useContext(AppContext);

    return (
        <Link href={`/products/${product.id}`} className={`flex items-center p-2 sm:p-4 gap-2 sm:gap-3 bg-white rounded-lg cursor-pointer`}>
            <button className='h-7 w-7 shrink-0 rounded-full flex items-center justify-center border border-slate-400
                transition duration-300 ease-in-out text-red-400 hover:bg-red-500 hover:text-white'
                onClick={() => removeFromCart(product)}
            >
                <FaRegTrashAlt className='text-base' />
            </button>

            <div className='relative w-16 h-16 sm:w-24 sm:h-24 shrink-0'>
                <Image src={`${product.thumbnail}`} alt='cart-product-image' className='w-full rounded' layout='fill' objectFit='contain' />
            </div>

            <div className='flex-auto flex flex-wrap items-center gap-2 justify-between'>
                <div className="flex flex-auto flex-col gap-2">
                    <div className='text-sm sm:text-base !leading-tight'>{product.title}</div>

                    <div className="flex items-center">
                        <div className='shrink-0 text-sm sm:text-base font-bold text-gray-700'>${product.price}</div>

                        <div className="mx-1">
                            <LiaTimesSolid className="text-slate-500" />
                        </div>

                        <div className='text-sm sm:text-base text-gray-500'>{product.quantity ?? 1}</div>
                    </div>
                </div>

                <div className="flex items-center">
                    <ProductQuantityHandle product={product} />

                    <div className='shrink-0 text-sm sm:text-base font-bold text-gray-700'>${product.total ?? 0}</div>
                </div>
            </div>
        </Link>
    )
}

export default CartProduct