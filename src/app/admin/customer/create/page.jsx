"use client"
import { AppRequest } from "@/http/AxiosCall";
import { useState } from "react";
import Alert from "../../components/Alert";

const page = () => {
    const initData = {
        username: "",
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        password: "",
        gender: "",
        phone: "",
        birthDate: "",
        bloodGroup: "",
        address: "",
    };
	const [alertObj, setAlertObj] = useState({
		isOpen: false,
		type: 'success',
		msg: ''
	});
    const [formData, setFormData] = useState(initData);

	const setForm = (event) => {
        const { name, value } = event.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

	const handleSubmit = async ()=> {
		const res = await AppRequest.AxiosPost(`users/add`, JSON.stringify(formData));

        if (typeof res.error == 'undefined') {
			setAlertObj(prev => ({...prev, isOpen: true, msg: 'Customer has been added'}))
			setFormData(initData);
        } 
		else {
			setAlertObj(prev => ({...prev, isOpen: true, type: 'error', msg: 'Error while adding customer'}))
		}
		setTimeout(() => {
			setAlertObj(prev => ({...prev, isOpen: false}))
		}, 2500);
	}

	return (
		<>
			<h4 className='text-2xl font-semibold mb-4'>Add Customer</h4>
			<Alert {...alertObj} />
			
			<div className="lg:max-w-2xl">
				<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-2">
					<div>
						<div className="label">
							<span className="label-text">Username <span className="text-red-600">*</span></span>
						</div>
						<input type="text" name="username" className="input input-bordered input-primary input-sm w-full rounded-sm" 
							value={formData.username} onChange={setForm} />
					</div>
					<div>
						<div className="label">
							<span className="label-text">First Name</span>
						</div>
						<input type="text" name="firstName" className="input input-bordered input-primary input-sm w-full rounded-sm" 
							value={formData.firstName} onChange={setForm} />
					</div>
					<div>
						<div className="label">
							<span className="label-text">Last Name</span>
						</div>
						<input type="text" name="lastName" className="input input-bordered input-primary input-sm w-full rounded-sm" 
							value={formData.lastName} onChange={setForm} />
					</div>
					<div>
						<div className="label">
							<span className="label-text">Age <span className="text-red-600">*</span></span>
						</div>
						<input type="number" name="age" className="input input-bordered input-primary input-sm w-full rounded-sm" 
							value={formData.age} onChange={setForm} />
					</div>
					<div>
						<div className="label">
							<span className="label-text">Email <span className="text-red-600">*</span></span>
						</div>
						<input type="email" name="email" className="input input-bordered input-primary input-sm w-full rounded-sm"
							value={formData.email} onChange={setForm} />
					</div>
					<div>
						<div className="label">
							<span className="label-text">Password <span className="text-red-600">*</span></span>
						</div>
						<input type="password" name="password" className="input input-bordered input-primary input-sm w-full rounded-sm"
							value={formData.password} onChange={setForm} />
					</div>
					<div>
						<div className="label">
							<span className="label-text">Phone <span className="text-red-600">*</span></span>
						</div>
						<input type="number" name="phone" className="input input-bordered input-primary input-sm w-full rounded-sm"
							value={formData.phone} onChange={setForm} />
					</div>
					<div>
						<div className="label">
							<span className="label-text">Gender <span className="text-red-600">*</span></span>
						</div>
						<select name="gender" className="select select-primary select-sm w-full rounded-sm" 
							value={formData.gender} onChange={setForm}>
							<option disabled>What is gender?</option>
							<option value="male">Male</option>
							<option value="female">Female</option>
							<option value="other">Others</option>
						</select>
					</div>
					<div>
						<div className="label">
							<span className="label-text">Birth Date</span>
						</div>
						<input type="date" name="date" className="input input-bordered input-primary input-sm w-full rounded-sm"
							value={formData.date} onChange={setForm} />
					</div>
					<div>
						<div className="label">
							<span className="label-text">Blood Group <span className="text-red-600">*</span></span>
						</div>
						<select name="bloodGroup" className="select select-primary select-sm w-full rounded-sm" 
							value={formData.bloodGroup} onChange={setForm}>
							<option disabled>What is your blood group?</option>
							<option value="A+">A+</option>
							<option value="A-">A-</option>
							<option value="B+">B+</option>
							<option value="B-">B-</option>
							<option value="O+">O+</option>
							<option value="O-">O-</option>
							<option value="AB+">AB+</option>
							<option value="AB-">AB-</option>
						</select>
					</div>
					<div className="col-span-2">
						<div className="label">
							<span className="label-text">Image</span>
						</div>
						<input type="file" name="image" className="file-input input-sm file-input-success w-full" />
					</div>
					<div className="col-span-2">
						<div className="label">
							<span className="label-text">Address <span className="text-red-600">*</span></span>
						</div>
						<textarea className="textarea textarea-primary rounded-sm w-full" name="address" value={formData.address} onChange={setForm}></textarea>
					</div>
				</div>
				<div className="mt-2 text-center">
					<button className="w-28 btn btn-sm btn-success" onClick={handleSubmit}>Submit</button>
				</div>
			</div>
		</>
	)
}

export default page