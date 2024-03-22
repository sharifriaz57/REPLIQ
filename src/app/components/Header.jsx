import Link from 'next/link';
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className='w-full bg-white py-3'>
        <div className="container flex items-center justify-between mx-auto">
            <Link href={`/`} className='text-3xl text-green-500 font-bold'>REPLIQ</Link>

            <div className='flex gap-x-6'>
                <FaRegUser className='text-2xl ' />
                <BsCart3 className='text-2xl ' />
            </div>
        </div>
    </div>
  )
}

export default Header