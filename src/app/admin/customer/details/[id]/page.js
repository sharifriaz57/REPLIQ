"use client"
import { AppContext } from "@/context/AppContext";
import { AppRequest } from "@/http/AxiosCall";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const page = () => {
    const params = useParams();
    const [user, setUser] = useState([]);
    const { appData, handleCart, removeFromCart } = useContext(AppContext);
    const {carts} = appData;

    const fetchData = async () => {
        const res = await AppRequest.AxiosGet(`users/${params.id}`);

        if (typeof res.error == 'undefined') {
            setUser(res);
        }
    }

    useEffect(() => {
        fetchData()
    }, [params])

    return (
        <>
            <h4 className='text-2xl font-semibold text-center mb-4'>Customer Details</h4>

            <div className="w-full">
                <div className="relative w-24 h-24 mx-auto mb-2">
                    <Image src={user.image} alt="img" layout='fill' objectFit='cover' />
                </div>
                <h3 className='text-2xl font-light text-center mb-3'>{user.firstName}</h3>

                <div className="grid grid-rows-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-3">
                    <div className="flex items-center border-b border-slate-300">
                        <div className="w-28 shrink-0 text-black text-base font-semibold">Username</div>
                        <div className="flex-auto text-slate-800 text-light capitalize">{user.username}</div>
                    </div>
                    <div className="flex items-center border-b border-slate-300">
                        <div className="w-28 shrink-0 text-black text-base font-semibold">First Name</div>
                        <div className="flex-auto text-slate-800 text-light capitalize">{user.firstName}</div>
                    </div>
                    <div className="flex items-center border-b border-slate-300">
                        <div className="w-28 shrink-0 text-black text-base font-semibold">Last Name</div>
                        <div className="flex-auto text-slate-800 text-light capitalize">{user.lastName}</div>
                    </div>
                    <div className="flex items-center border-b border-slate-300">
                        <div className="w-28 shrink-0 text-black text-base font-semibold">Age</div>
                        <div className="flex-auto text-slate-800 text-light capitalize">{user.age}</div>
                    </div>
                    <div className="flex items-center border-b border-slate-300">
                        <div className="w-28 shrink-0 text-black text-base font-semibold">Gender</div>
                        <div className="flex-auto text-slate-800 text-light capitalize">{user.gender}</div>
                    </div>
                    <div className="flex items-center border-b border-slate-300">
                        <div className="w-28 shrink-0 text-black text-base font-semibold">Gender</div>
                        <div className="flex-auto text-slate-800 text-light capitalize">{user.gender}</div>
                    </div>
                    <div className="flex items-center border-b border-slate-300">
                        <div className="w-28 shrink-0 text-black text-base font-semibold">Email</div>
                        <div className="flex-auto text-slate-800 text-light capitalize">{user.email}</div>
                    </div>
                    <div className="flex items-center border-b border-slate-300">
                        <div className="w-28 shrink-0 text-black text-base font-semibold">Phone</div>
                        <div className="flex-auto text-slate-800 text-light capitalize">{user.phone}</div>
                    </div>
                    <div className="flex items-center border-b border-slate-300">
                        <div className="w-28 shrink-0 text-black text-base font-semibold">Birtdate</div>
                        <div className="flex-auto text-slate-800 text-light capitalize">{user.birthDate}</div>
                    </div>
                    <div className="flex items-center border-b border-slate-300">
                        <div className="w-28 shrink-0 text-black text-base font-semibold">Blood Group</div>
                        <div className="flex-auto text-slate-800 text-light capitalize">{user.bloodGroup}</div>
                    </div>
                    <div className="flex items-center border-b border-slate-300">
                        <div className="w-28 shrink-0 text-black text-base font-semibold">Address</div>
                        <div className="flex-auto text-slate-800 text-light capitalize">{user.address?.address ?? ''}</div>
                    </div>
                    <div className="flex items-center border-b border-slate-300">
                        <div className="w-28 shrink-0 text-black text-base font-semibold">Height</div>
                        <div className="flex-auto text-slate-800 text-light capitalize">{user.height} cm</div>
                    </div>
                    <div className="flex items-center border-b border-slate-300">
                        <div className="w-28 shrink-0 text-black text-base font-semibold">Weight</div>
                        <div className="flex-auto text-slate-800 text-light capitalize">{user.weight} kgs</div>
                    </div>
                    <div className="flex items-center border-b border-slate-300">
                        <div className="w-28 shrink-0 text-black text-base font-semibold">IP</div>
                        <div className="flex-auto text-slate-800 text-light capitalize">{user.ip}</div>
                    </div>
                    <div className="flex items-center border-b border-slate-300">
                        <div className="w-28 shrink-0 text-black text-base font-semibold">Max Address</div>
                        <div className="flex-auto text-slate-800 text-light capitalize">{user.macAddress}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page