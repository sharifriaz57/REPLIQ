"use client"
import { AppRequest } from '@/http/AxiosCall';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const page = () => {
	const [customers, setCustomers] = useState([]);

	const fetchData = async () => {
		const res = await AppRequest.AxiosGet(`users`);

		if (typeof res.error == 'undefined') {
			setCustomers(res.users);
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<>
			<h4 className='text-2xl font-semibold mb-4'>Customer List</h4>

			<div className="overflow-x-auto" style={{ maxHeight: 'calc(100vh - 150px)' }}>
				<table className="table table-xs table-pin-rows table-pin-cols">
					<thead>
						<tr>
							<th>#</th>
							<th>Image</th>
							<th>Name</th>
							<th>Age</th>
							<th>Gender</th>
							<th>Email</th>
							<th>Phone</th>
							<th>Birth Date</th>
							<th>Address</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{customers.map((user, key) => (
							<tr key={key}>
								<th>{key+1}</th>
								<td>
									<div className='w-12 h-12 relative'>
										<Image src={user.image} alt="img" layout='fill' objectFit='cover' />
									</div>	
								</td>
								<td>{user.firstName ?? ''}</td>
								<td>{user.age ?? ''}</td>
								<td>{user.gender ?? ''}</td>
								<td>{user.email ?? ''}</td>
								<td>{user.phone ?? ''}</td>
								<td>{user.birthDate ?? ''}</td>
								<td>{user.address?.address ?? ''}</td>
								<td>
									<Link href={`/admin/customer/details/${user.id}`}>
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
							<th>Name</th>
							<th>Age</th>
							<th>Gender</th>
							<th>Email</th>
							<th>Phone</th>
							<th>Birth Date</th>
							<th>Address</th>
							<th>Actions</th>
						</tr>
					</tfoot>
				</table>
			</div>
		</>

	)
}

export default page