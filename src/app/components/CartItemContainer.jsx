import { AppContext } from "@/context/AppContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import CartProduct from "./CartProduct";

const CartItemContainer = () => {
    const { appData } = useContext(AppContext);
    const { carts } = appData;

    return (
        carts.products.length > 0
            ? <div className="flex flex-col gap-2">
                {carts.products.map((item) => <CartProduct key={item.id} product={item} />)}
            </div>
            : <div className='py-6 flex flex-col items-center justify-center'>
                <Image src={`/images/empty-cart.png`} width={'200'} height={'250'} objectFit='contain' className='mb-4' />
                <h5 className='text-xl sm:text-2xl text-gray-500 font-semibold text-center mb-2'>Your cart is empty</h5>
                <Link href='/product-list/all' className='text-primary text-center'>Add product to your cart</Link>
            </div>
    )
}

export default CartItemContainer