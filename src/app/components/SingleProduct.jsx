import Image from 'next/image'
import Link from 'next/link'

const SingleProduct = ({ product }) => {
    return (
        <Link href={`/product/${product.id}`} className="bg-white rounded-lg">
            <div className='w-full pt-full relative mb-2'>
                <Image src={product.thumbnail} alt='product-img' className="rounded-t-lg" layout='fill' objectFit='cover' />
            </div>
            <div className="p-3">
                <h5 className="text-lg font-medium capitalize text-black">{product.title}</h5>
                <p className="text-sm text-slate-400 capitalize mb-2">{product.category}</p>
                <p className="text-base text-slate-600">${product.price}</p>
            </div>
        </Link>
    )
}

export default SingleProduct