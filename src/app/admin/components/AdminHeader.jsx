
"use client"
import { AdminContext } from "@/context/AdminContext";
import { useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const AdminHeader = () => {
    const { adminData, setAdminData } = useContext(AdminContext);

    return (
        <div className="navbar min-h-9 bg-base-300 sticky top-0 z-10">
            <div className="navbar-start">
                <button className="btn btn-sm btn-square btn-ghost" onClick={() => setAdminData(prev => ({...prev, isSidebarOpen: !prev.isSidebarOpen}))}>
                    <RxHamburgerMenu className="text-xl" />
                </button>
            </div>
            
            <div className="navbar-end">
                
            </div>
        </div>
    )
}

export default AdminHeader