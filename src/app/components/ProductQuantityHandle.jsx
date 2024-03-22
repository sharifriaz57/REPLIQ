import { AppContext } from '@/context/AppContext';
import { useContext } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { FcMinus } from 'react-icons/fc';

const ProductQuantityHandle = ({ product }) => {
	const { handleCart } = useContext(AppContext);

	return (
		<div className='flex items-center gap-2 mr-4'>
			<button className='h-8 w-8 shrink-0 rounded-full flex items-center justify-center bg-slate-100'
					onClick={e => handleCart(product, 'subtract')}>
				<FcMinus />
			</button>

			<input type='number' className='w-16 h-8 p-2 outline-none shrink-0 text-sm sm:text-base border-2 bg-slate-100 text-center font-bold text-gray-700' 
				value={product.quantity ?? 0} disabled={true} />

			<button className='h-7 w-8 shrink-0 rounded-full flex items-center justify-center bg-slate-100'
				onClick={e => handleCart(product, 'add')}>
				<AiOutlinePlus />
			</button>
		</div>
	)
}

export default ProductQuantityHandle