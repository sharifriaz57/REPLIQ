"use client"
import { AppRequest } from "@/http/AxiosCall";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import Alert from "../../components/Alert";

const page = () => {
    const initData = {
        title: "",
        price: "",
        discountPercentage: "",
        rating: 0,
        stock: 0,
        brand: "",
        category: "",
        thumbnail: "",
        description: "",
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
		const res = await AppRequest.AxiosPost(`products/add`, JSON.stringify(formData));

        if (typeof res.error == 'undefined') {
			setAlertObj(prev => ({...prev, isOpen: true, msg: 'Product has been added'}))
			setFormData(initData);
        } 
		else {
			setAlertObj(prev => ({...prev, isOpen: true, type: 'error', msg: 'Error while adding product'}))
		}
		setTimeout(() => {
			setAlertObj(prev => ({...prev, isOpen: false}))
		}, 2500);
	}

	console.log(formData);
	const handleFile = (e) => {
		const file = e.target.files[0];
		setFormData((prevData) => ({...prevData, thumbnail: file}));
	}

	return (
		<>
			<h4 className='text-2xl font-semibold mb-4'>Add Product</h4>
			<Alert {...alertObj} />
			
			<div className="lg:max-w-2xl">
				<div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-2">
					<div>
						<div className="label">
							<span className="label-text">Title <span className="text-red-600">*</span></span>
						</div>
						<input type="text" name="title" className="input input-bordered input-primary input-sm w-full rounded-sm" 
							value={formData.title} onChange={setForm} />
					</div>
					<div>
						<div className="label">
							<span className="label-text">Category <span className="text-red-600">*</span></span>
						</div>
						<select name="category" className="select select-primary select-sm w-full rounded-sm" 
							value={formData.category} onChange={setForm}>
							<option disabled>Select Category</option>
							<option value="smartphones">Smartphones</option>
							<option value="laptops">Laptops</option>
							<option value="skincare">Skincare</option>
							<option value="grocery">Grocery</option>
							<option value="furniture">Furniture</option>
						</select>
					</div>
					<div>
						<div className="label">
							<span className="label-text">Price <span className="text-red-600">*</span></span>
						</div>
						<input type="number" name="price" className="input input-bordered input-primary input-sm w-full rounded-sm" 
							value={formData.price} onChange={setForm} />
					</div>
					<div>
						<div className="label">
							<span className="label-text">Stock <span className="text-red-600">*</span></span>
						</div>
						<input type="number" name="stock" className="input input-bordered input-primary input-sm w-full rounded-sm" 
							value={formData.stock} onChange={setForm} />
					</div>
					<div>
						<div className="label">
							<span className="label-text">Discount (%) <span className="text-red-600">*</span></span>
						</div>
						<input type="number" name="discountPercentage" className="input input-bordered input-primary input-sm w-full rounded-sm" 
							value={formData.discountPercentage} onChange={setForm} />
					</div>
					<div>
						<div className="label">
							<span className="label-text">Brand <span className="text-red-600">*</span></span>
						</div>
						<select name="brand" className="select select-primary select-sm w-full rounded-sm" 
							value={formData.brand} onChange={setForm}>
							<option disabled>Select brand</option>
							<option value="apple">Apple</option>
							<option value="samsung">Samsung</option>
							<option value="Oppo">Oppo</option>
							<option value="Huawei">Huawei</option>
							<option value="Fujimata">Fujimata</option>
						</select>
					</div>
					<div>
						<div className="label">
							<span className="label-text">Rating (%) <span className="text-red-600">*</span></span>
						</div>
						<Rating emptySymbol={<AiOutlineStar className="text-secondary" />} fullSymbol={<AiFillStar className="text-secondary" />}
							initialRating={formData.rating} fractions={2} className='text-xl mr-1 !leading-none' name="rating" onChange={value => setFormData(prev => ({...prev, rating: value}))}
                        />
					</div>
					<div className="col-span-2">
						<div className="label">
							<span className="label-text">Description <span className="text-red-600">*</span></span>
						</div>
						<textarea className="textarea textarea-primary rounded-sm w-full" name="description" value={formData.description} onChange={setForm}></textarea>
					</div>
					<div className="col-span-2">
						<div className="label">
							<span className="label-text">Image</span>
						</div>
						<input type="file" name="image" className="file-input input-sm file-input-success w-full" onChange={handleFile} />
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