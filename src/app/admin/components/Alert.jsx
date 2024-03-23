import { LiaTimesCircleSolid } from 'react-icons/lia';
import { RiVerifiedBadgeLine } from 'react-icons/ri';

const Alert = ({ isOpen = false, type = 'success', msg }) => {

    return (
        type == "success"
            ? <div role="alert" className={`${isOpen ? 'flex' : 'hidden'} max-w-sm fixed z-50 shadow top-24 left-1/2 -translate-x-1/2 alert alert-success rounded-md`}>
				<RiVerifiedBadgeLine className="text-lg" />
				<span>{msg ?? 'Success'}!</span>
			</div>
            : <div role="alert" className={`${isOpen ? 'flex' : 'hidden'} max-w-sm fixed z-50 shadow top-24 left-1/2 -translate-x-1/2 alert alert-error rounded-md`}>
                <LiaTimesCircleSolid className="text-lg" />
                <span>{msg ?? 'Error'}!</span>
            </div>
    )
}

export default Alert