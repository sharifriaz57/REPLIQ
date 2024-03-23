"use client"
import { AdminContext } from "@/context/AdminContext"
import Link from "next/link"
import { useEffect, useState } from "react"
import AdminHeader from "./components/AdminHeader"

const layout = ({ children }) => {
    const initState = {
		isSidebarOpen: true,
	}
	const [adminData, setAdminData] = useState(initState); 

    const collapseOnResize = () =>{
        if (window.innerWidth < 992) {
            setAdminData(prev => ({...prev, isSidebarOpen: false}))
        } 
    }
    
    useEffect(() => {
        collapseOnResize();
        window.addEventListener('resize', collapseOnResize);

        return () => window.removeEventListener('resize', collapseOnResize)
    }, [])

    return (
        <AdminContext.Provider value={{ adminData, setAdminData }}>
            <div className={`flex overflow-hidden transition duration-300 ease-in-out`} data-theme="lemonade">
                <div className={`${!adminData.isSidebarOpen ? 'w-0 p-0' : 'w-56'} shrink-0 transition duration-300 bg-base-200 min-h-screen max-h-screen overflow-y-auto`}>
                    <div className="bg-base-300 h-12 flex items-center justify-center">
                        <Link href={`/admin/dashboard`} className='text-3xl text-primary font-bold'>REPLIQ</Link>
                    </div>

                    <ul className={`w-full menu p-4`}>
                        <li>
                            <Link href={`/admin/dashboard`}>Dashboard</Link>
                        </li>
                        <li>
                            <details>
                                <summary>Customer</summary>
                                <ul>
                                    <li><Link href={`/admin/customer/create`}>Add</Link></li>
                                    <li><Link href={`/admin/customer/list`}>List</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary>Product</summary>
                                <ul>
                                    <li><Link href={`/admin/product/create`}>Add</Link></li>
                                    <li><Link href={`/admin/product/list`}>List</Link></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>

                <div className={`flex-auto max-h-screen overflow-y-auto`}>
                    <AdminHeader />

                    <div className="p-4">
                        {children}
                    </div>
                </div>
            </div>
        </AdminContext.Provider>
    )
}

export default layout