import { AppContext } from '@/context/AppContext';
import { useContext } from 'react';
import { FaCrown } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';

const CartCalculation = () => {
    const { appData } = useContext(AppContext);
    const { carts } = appData;

    return (
        <>
            <div className="flex flex-col gap-3 sm:gap-4 mb-6">
                <div className="flex items-center">
                    <GiReceiveMoney className="text-2xl text-slate-900 mr-3" />
                    <p>Cash on Delivery Available</p>
                </div>
                <div className="flex items-center">
                    <FaCrown className="text-2xl text-slate-900 mr-3" />
                    <p>100% Original Product</p>
                </div>
            </div>

            <ul className="flex flex-col gap-2 mb-3">
                <li className="flex items-center justify-between">
                    <span className="font-medium text-gray-500">Subtotal</span>
                    <span className="font-bold text-gray-700">{carts.total} USD</span>
                </li>
                <li className="flex items-center justify-between">
                    <span className="font-medium text-gray-500">Shipping</span>
                    <span className="font-bold text-gray-700">0 USD</span>
                </li>
                <li className="flex items-center justify-between">
                    <span className="font-medium text-gray-500">Discount</span>
                    <span className="font-bold text-gray-700">{carts.discountedTotal} USD</span>
                </li>
                <li className="flex items-center justify-between">
                    <span className="font-medium text-gray-500">Total</span>
                    <span className="font-bold text-gray-700">{carts.total} USD</span>
                </li>
            </ul>
        </>
    )
}

export default CartCalculation