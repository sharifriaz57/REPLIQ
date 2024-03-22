"use client";
import { AppContext } from "@/context/AppContext";
import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Header from "../components/Header";

const Signin = () => {
    const router = useRouter();
    const { appData, setAppData } = useContext(AppContext);
    const initData = {
        phone: "",
        password: "",
    };
    const [formData, setFormData] = useState(initData);
    const [isPassVisible, setIsPassVisible] = useState(false);
    const [validation, setValidation] = useState({});

    const setForm = (event) => {
        const { name, value, checked, type } = event.target;

        if (validation[name] != undefined && value == '') {
            setValidation(prev => ({ ...prev, [name]: true }))
        } else {
            setValidation(prev => ({ ...prev, [name]: false }))
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleFormError = () => {
        const errors = {}
        for (const key in formData) {
            if (formData[key] == '') {
                errors[key] = true;
            } else {
                errors[key] = false;
            }
        }
        setValidation(errors)
        return errors;
    }
    
    const submitForm = async (event) => {
        event.preventDefault();
        handleFormError()
        if (validation.phone || validation.password) return;

        await signInWithEmailAndPassword(auth, `${formData.phone}@gmail.com`, formData.password)
            .then((userCredential) => {
                const obj = {
                    uid: userCredential.user.uid,
                    accessToken: userCredential.user.accessToken
                }
                setAppData(prev => ({ ...prev, user: obj}));
                router.push('/');
                setFormData(initData);
            })
            .catch((error) => {
                console.log(error.code, error.message);
            });

    };

    return (
        <>
            <Header />
        
            <div className="flex min-h-screen flex-1 flex-col justify-center px-3 py-4 md:py-10 bg-gray-200">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-1 mb-1 md:mb-3 text-center text-2xl md:text-3xl font-bold leading-9 tracking-tight text-gray-900">Welcome to REPLIQ.</h2>
                    <div className="text-center text-slate-500">
                        Don't have an account?
                        <Link href="/signup" className="font-semibold text-green-500 inline-block ms-1">Create Account</Link>
                    </div>
                </div>

                <div className="mt-3 sm:mt-5 sm:mx-auto sm:w-full sm:max-w-md bg-white p-4 md:p-6 rounded-lg shadow-md">
                    <div className="w-full">
                        <form className="space-y-4" onSubmit={submitForm}>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium leading-4 text-gray-900">
                                    Phone Number
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="number"
                                        value={formData.phone}
                                        onChange={setForm}
                                        required
                                        className="block w-full h-8 rounded-md border-0 px-2 py-2 text-gray-900 shadow-sm outline-0 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-4"
                                    />
                                </div>
                                {validation.phone && <div className="text-sm text-red-500 leading-loose">Must provide phone number</div>}
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-4 text-gray-900">
                                        Password
                                    </label>
                                </div>
                                <div className="mt-2 relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type={isPassVisible ? 'text' : 'password'}
                                        value={formData.password}
                                        onChange={setForm}
                                        required
                                        className="block w-full h-8 rounded-md border-0 px-2 py-2 pr-10 text-gray-900 shadow-sm outline-0 ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                                    />
                                    <span className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2" onClick={() => setIsPassVisible(prev => !prev)}>
                                        {isPassVisible
                                            ? <FaEye className="text-slate-500 text-xl" />
                                            : <FaEyeSlash className="text-slate-500 text-xl" />
                                        }
                                    </span>
                                </div>
                                {validation.password && <div className="text-sm text-red-500 leading-loose">Must use a password</div>}
                            </div>

                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-green-500 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                                onClick={submitForm}
                            >
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin