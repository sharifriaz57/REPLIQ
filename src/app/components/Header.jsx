"use client"
import { AppContext } from '@/context/AppContext';
import { auth } from '@/firebase';
import { signOut } from 'firebase/auth';
import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const Header = () => {
    const { appData, setAppData } = useContext(AppContext);
    const { user, carts } = appData;

    const handleLogout = () =>{
        signOut(auth)
            .then(() => {
                setAppData(prev => ({ ...prev, user: null}));
                router.push("/signin");
            })
            .catch((error) => {
                console.log(error.code, error.message);
            });
    }

    useEffect(() => {
        const storedState = localStorage.getItem('appData');
        if (storedState) 
            setAppData(prev => ({...prev, user: JSON.parse(storedState).user}))
    }, [])

    return (
        <div className='w-full bg-white py-3'>
            <div className="container flex items-center justify-between mx-auto">
                <Link href={`/`} className='text-3xl text-primary font-bold'>REPLIQ</Link>

                <div className='flex gap-x-6'>
                    <div className='flex gap-3'>
                        {user && <div className='w-32 text-ellipsis overflow-hidden ...'>{user.uid}</div>}
                        
                        <Link href={'/signin'}>
                            {user
                                ? <FiLogOut className='text-2xl' onClick={handleLogout} />
                                : <FaRegUser className='text-2xl ' />}
                        </Link>
                    </div>
                    
                    <Link href={'/cart'} className="relative cursor-pointer">
                        <BsCart3 className='text-2xl' />
                        {carts.totalProducts > 0 &&
                            <span className="w-5 h-5 absolute -top-2 left-4 -translate-x-1/2 flex items-center justify-center rounded-full bg-primary text-white text-sm font-semibold">{carts.totalProducts}</span>
                        }
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header