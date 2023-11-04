
import { HiOutlineBackward, HiOutlineCheckBadge, HiOutlineEye, HiOutlineTrash } from "react-icons/hi2";
import { useCheckin } from "./useCheckin";
import Spinner from "../../ui/Spinner";
import { useCheckout } from "./useCheckout";
import { useDelete } from "./useDelete";
import { useNavigate } from "react-router-dom";


function BookingBoxModal({ onClose, booking }) {
    const navigate = useNavigate()
    const { checkin, isLoading } = useCheckin()
    const { checkout, isLoading: isLoading2 } = useCheckout()
    const { deleteBooking, isDeleting } = useDelete()

    const loading = isLoading || isLoading2 || isDeleting;

    if (loading) return <Spinner />

    function handleNavigateDetails(id) {
        navigate(`/bookings/${id}`)
    }
    return (

        <div className="bg-white rounded-lg py-2 px-8 shadow-xl">
            <div className="flex justify-end flex-col gap-2">
                <button onClick={() => handleNavigateDetails(booking.id)} className="text-green-500 hover:text-green-600 duration-200 transition-colors text-xl flex items-center gap-4"><span><HiOutlineEye /></span><span>See details</span></button>
                {booking.status === 'unconfirmed' && <button onClick={() => checkin(booking.id)} className="text-blue-500 hover:text-blue-600 duration-200 transition-colors text-xl flex items-center gap-4">
                    <span><HiOutlineCheckBadge /></span>
                    <span>Check in</span>
                </button>}
                {booking.status === 'checked in' && <button onClick={() => checkout(booking.id)} className="text-blue-500 hover:text-blue-600 duration-200 transition-colors text-xl flex items-center gap-4">
                    <span><HiOutlineBackward /></span>
                    <span>Check out</span>
                </button>}
                <button onClick={() => deleteBooking(booking.id)} className="text-red-500 hover:text-red-600 duration-200 transition-colors text-xl flex items-center gap-4"><span><HiOutlineTrash /></span><span>Delete</span></button>
            </div>
        </div>

    );

}

export default BookingBoxModal

