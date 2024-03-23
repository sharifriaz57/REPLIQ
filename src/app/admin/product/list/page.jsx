"use client"
import { AppRequest } from '@/http/AxiosCall';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const page = () => {
	const [products, setProducts] = useState([]);

	const fetchData = async () => {
		const res = await AppRequest.AxiosGet(`products`);

		if (typeof res.error == 'undefined') {
			setProducts(res.products);
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<>
			<h4 className='text-2xl font-semibold mb-4'>Product List</h4>

			<div className="overflow-x-auto" style={{ maxHeight: 'calc(100vh - 150px)' }}>
				<table className="table table-xs table-pin-rows table-pin-cols">
					<thead>
						<tr>
							<th>#</th>
							<th>Image</th>
							<th>Title</th>
							<th>Category</th>
							<th className='text-right'>Price</th>
							<th className='text-right'>Stock</th>
							<th className='text-right'>Discount (%)</th>
							<th>Description</th>
							<th>Brand</th>
							<th>Rating</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{products.map((product, key) => (
							<tr key={key}>
								<th>{key+1}</th>
								<td>
									<div className='w-12 h-12 relative'>
										<Image src={product.thumbnail} alt="img" layout='fill' objectFit='cover' />
									</div>	
								</td>
								<td>{product.title}</td>
								<td className='capitalize'>{product.category}</td>
								<td className='text-right'>${product.price}</td>
								<td className='text-right'>{product.stock}</td>
								<td className='text-right'>{product.discountPercentage}</td>
								<td>{product.description}</td>
								<td>{product.brand}</td>
								<td>{product.rating}</td>
								<td>
									<Link href={`/admin/product/details/${product.id}`}>
										<button className="btn btn-xs btn-info">Details</button>
									</Link>
								</td>
							</tr>
						))}
					</tbody>
					<tfoot>
						<tr>
								<th>#</th>
								<th>Image</th>
								<th>Title</th>
								<th>Category</th>
								<th>Price</th>
								<th>Stock</th>
								<th>Discount (%)</th>
								<th>Description</th>
								<th>Brand</th>
								<th>Rating</th>
								<th>Actions</th>
							</tr>
					</tfoot>
				</table>
			</div>
		</>

	)
}

export default page