"use client"
import { AppContext } from '@/context/AppContext';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import CartCalculation from '../components/CartCalculation';
import CartItemContainer from '../components/CartItemContainer';
import Footer from '../components/Footer';
import Header from '../components/Header';

const page = () => {
    const router = useRouter();
    const { appData } = useContext(AppContext);
    const { carts } = appData;

    return (
        <>
            <Header />

            <div className='container py-10 mx-auto'>
                <h3 className="text-4xl font-bold text-slate-700 mb-6">Cart</h3>

                <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-10 mb-5 mx-auto">
                    <div className="col-span-3 lg:col-span-2 mb-5">
                        <CartItemContainer />
                    </div>

                    <div className="col-span-3 md:col-span-2 lg:col-span-1 w-full mx-auto">
                        <div className="bg-white shadow-md rounded p-4 md:p-6 border">
                            <CartCalculation />

                            <button className="w-full px-6 py-2 bg-primary hover:bg-secondary" disabled={carts.products.length ? false : true} onClick={() => router.push(`/checkout`)}>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default page