import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-green-100 py-16'>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto">
            <Link href={`/`} className='text-3xl text-primary font-bold'>REPLIQ</Link>

            <div className=''>
                <h5 className="text-lg font-medium capitalize text-black">Important Links</h5>
                
                <ul className='flex flex-col'>
                    <li className='w-full'>
                        <Link href="#">Link</Link></li>
                    <li className='w-full'>
                        <Link href="#">Link</Link></li>
                    <li className='w-full'>
                        <Link href="#">Link</Link></li>
                    <li className='w-full'>
                        <Link href="#">Link</Link></li>
                </ul>
            </div>

            <div className=''>
                <h5 className="text-lg font-medium capitalize text-black">Category</h5>
                
                <ul className='flex flex-col'>
                    <li className='w-full'>
                        <Link href="#">Link</Link></li>
                    <li className='w-full'>
                        <Link href="#">Link</Link></li>
                    <li className='w-full'>
                        <Link href="#">Link</Link></li>
                    <li className='w-full'>
                        <Link href="#">Link</Link></li>
                </ul>
            </div>

            <div className=''>
                <h5 className="text-lg font-medium capitalize text-black">Important Links</h5>
                
                <ul className='flex flex-col'>
                    <li className='w-full'>
                        <Link href="#">Link</Link></li>
                    <li className='w-full'>
                        <Link href="#">Link</Link></li>
                    <li className='w-full'>
                        <Link href="#">Link</Link></li>
                    <li className='w-full'>
                        <Link href="#">Link</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer