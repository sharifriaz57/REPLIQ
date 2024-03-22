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

	const submitOrder = () => {
		
    }

	return (
		<>
			<Header />

			<div className='container py-10 mx-auto'>
                <h3 className="text-4xl font-bold text-slate-700 mb-6">Checkout</h3>

				<div className="grid grid-cols-5 gap-3 md:gap-4 xl:gap-10">
					<div className="col-span-5 md:col-span-3">
						<div className='grid grid-cols-2 gap-5'>
							<div>
								<label htmlFor="" className='text-sm font-semibold inline-block mb-2'>First Name <span className='text-red-500'>*</span></label>
								<input type='text' className='w-full h-10 p-3 outline-none border-1 text-gray-700 ring-transparent ring-1 focus:ring-primary' />
							</div>
							<div>
								<label htmlFor="" className='text-sm font-semibold inline-block mb-2'>Last Name <span className='text-red-500'>*</span></label>
								<input type='text' className='w-full h-10 p-3 outline-none border-1 text-gray-700 ring-transparent ring-1 focus:ring-primary' />
							</div>
							<div className='col-span-2'>
								<label htmlFor="" className='text-sm font-semibold inline-block mb-2'>Address <span className='text-red-500'>*</span></label>
								<input type='text' className='w-full h-10 p-3 outline-none border-1 text-gray-700 ring-transparent ring-1 focus:ring-primary' />
							</div>
							<div className=''>
								<label htmlFor="" className='text-sm font-semibold inline-block mb-2'>District <span className='text-red-500'>*</span></label>
								<select name="" id="" className='w-full h-10 px-3 outline-none border-1 text-gray-700 ring-transparent ring-1 focus:ring-primary'>
									<option value="1">Chattogram</option>
									<option value="2">Dhaka</option>
									<option value="3">Barishal</option>
									<option value="3">Sylet</option>
								</select>
							</div>
							<div className=''>
								<label htmlFor="" className='text-sm font-semibold inline-block mb-2'>ZIP Code</label>
								<input type='number' className='w-full h-10 p-3 outline-none border-1 text-gray-700 ring-transparent ring-1 focus:ring-primary' />
							</div>
							<div className=''>
								<label htmlFor="" className='text-sm font-semibold inline-block mb-2'>Email <span className='text-red-500'>*</span></label>
								<input type='email' className='w-full h-10 p-3 outline-none border-1 text-gray-700 ring-transparent ring-1 focus:ring-primary' />
							</div>
							<div className='col-span-2'>
								<label htmlFor="" className='text-sm font-semibold inline-block mb-2'>Notes (Additional)</label>
								<input type='text' className='w-full h-10 p-3 outline-none border-1 text-gray-700 ring-transparent ring-1 focus:ring-primary' />
							</div>
						</div>
					</div>

					<div className="col-span-5 md:col-span-2 w-full mx-auto">
						<div className='bg-white shadow-md'>
							<CartItemContainer />
						</div>

						<div className="bg-white shadow-md rounded p-4 mt-2 md:p-6 border">
							<CartCalculation />
							
							<button className="w-full px-6 py-2 bg-primary hover:bg-secondary" disabled={carts.products.length ? false : true} onClick={submitOrder}>Place Order</button>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	)
}

export default page