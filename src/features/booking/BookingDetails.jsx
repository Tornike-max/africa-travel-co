import { useNavigate, useParams } from "react-router-dom";
import { useBookingDetails } from "./useBookingDetails";
import Spinner from "../../ui/Spinner";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { formatCurrency } from "../../utils/helpers";
import { useCheckin } from "./useCheckin";
import { useCheckout } from "./useCheckout";
import { useDelete } from "./useDelete";

function BookingDetails() {
    const { bookingId } = useParams()
    const navigate = useNavigate()
    console.log(bookingId)
    const { data, isLoading } = useBookingDetails(bookingId)
    const { checkin, isLoading: isCheckingin } = useCheckin()
    const { checkout, isLoading: isCheckingout } = useCheckout()
    const { deleteBooking, isDeleting } = useDelete()


    if (isLoading || isCheckingin || isCheckingout || isDeleting) return <Spinner />

    console.log(data[0])
    const bookingData = data[0]

    const totalPrice = (bookingData?.hotels?.pricePerNight * bookingData?.numNights * bookingData?.numGuest) + bookingData?.trip?.flight_price + bookingData?.extrasPrice
    console.log(totalPrice)

    return (
        <div className="container mx-auto pt-28 pb-8">
            <div className='flex justify-between items-center px-4 py-6'>
                <h1 className="text-2xl font-semibold mb-4">Booking Details #{bookingData.id}</h1>
                <button onClick={() => navigate(-1)} className='font-medium gap-2 flex items-center py-2 px-3 bg-slate-100 hover:bg-slate-200 duration-200 transition-colors rounded-md'>
                    <span><HiOutlineArrowLeft /></span>
                    <span>Go Back</span>
                </button>
            </div>

            <div className="bg-white shadow-md p-4 rounded-lg font-semibold hover:p-5 transition-all duration-200 hover:bg-slate-100">
                <div className='flex justify-between items-center flex-col'>
                    <h2 className="text-xl text-center font-semibold mb-4 uppercase">Guest Information</h2>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center'>
                            <span className="font-semibold mr-2">Full Name:</span>
                            <span>{bookingData?.guests?.fullName}</span>
                        </div>
                        <div className='flex items-center'>
                            <span className="font-semibold mr-2">Email:</span>
                            <span>{bookingData?.guests?.email}</span>
                        </div>
                        <div className='flex items-center'>
                            <span className="font-semibold mr-2">Nationality:</span>
                            <span>{bookingData?.guests?.nationality}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4 bg-white shadow-md p-4 rounded-lg font-semibold hover:p-5 transition-all duration-200 hover-bg-slate-100 flex justify-between items-center flex-col hover:bg-slate-100">
                <h2 className="text-xl text-center font-semibold uppercase mb-4">Booking Details</h2>
                <div className="flex flex-col gap-4">
                    <div className='flex items-center'>
                        <span className="font-semibold mr-2">Start Date:</span>
                        <span>{bookingData?.startDate}</span>
                    </div>
                    <div className='flex items-center'>
                        <span className="font-semibold mr-2">End Date:</span>
                        <span>{bookingData?.endDate}</span>
                    </div>
                    <div className='flex items-center'>
                        <span className="font-semibold mr-2">Number of Nights:</span>
                        <span>{bookingData?.numNights}</span>
                    </div>
                    <div className='flex items-center'>
                        <span className="font-semibold mr-2">Status:</span>
                        <span>{bookingData?.status}</span>
                    </div>
                </div>
            </div>

            <div className="mt-4 bg-white shadow-md p-4 rounded-lg font-semibold hover:p-5 transition-all duration-200 hover-bg-slate-100 flex justify-between items-center flex-col hover:bg-slate-100">
                <h2 className="text-xl text-center uppercase font-semibold mb-4">Trip Information</h2>
                <div className="flex flex-col gap-4">
                    <div className='flex items-center'>
                        <span className="font-semibold mr-2">Company Name:</span>
                        <span>{bookingData?.trip?.companyName}</span>
                    </div>
                    <div className='flex items-center'>
                        <span className="font-semibold mr-2">Departure:</span>
                        <span>{bookingData?.trip?.departure}</span>
                    </div>
                    <div className='flex items-center'>
                        <span className="font-semibold mr-2">Arrival:</span>
                        <span>{bookingData?.trip?.arrival}</span>
                    </div>
                    <div className='flex items-center'>
                        <span className="font-semibold mr-2">Price:</span>
                        <span>{formatCurrency(bookingData?.trip?.flight_price)}</span>
                    </div>
                </div>
            </div>

            <div className="mt-4 bg-white shadow-md p-4 rounded-lg font-semibold hover:p-5 transition-all duration-200 hover-bg-slate-100 flex justify-between items-center flex-col hover:bg-slate-100">
                <h2 className="text-xl text-center uppercase font-semibold mb-4">Hotel Details</h2>
                <div className="flex flex-col gap-4">
                    <div className='flex items-center'>
                        <span className="font-semibold mr-2">Hotel Name:</span>
                        <span>{bookingData?.hotels?.hotelName}</span>
                    </div>
                    <div className='flex items-center'>
                        <span className="font-semibold mr-2">Rating:</span>
                        <span>{bookingData?.hotels?.rating}</span>
                    </div>
                    <div className='flex items-center'>
                        <span className="font-semibold mr-2">Rooms:</span>
                        <span>{bookingData?.hotels?.rooms}</span>
                    </div>
                    <div className='flex items-center'>
                        <span className="font-semibold mr-2">Price:</span>
                        <span>{formatCurrency(bookingData?.hotels?.pricePerNight)} Per night</span>
                    </div>
                </div>
            </div>

            <div className="mt-4 bg-white shadow-md p-4 rounded-lg font-semibold hover:p-5 transition-all duration-200 hover-bg-slate-100 flex justify-between items-center flex-col hover:bg-slate-100">
                <div>
                    <h2 className="text-xl text-center uppercase font-semibold mb-4">Price Details</h2>
                    <div className="flex flex-col gap-4">
                        <div className='flex items-center'>
                            <span className="font-semibold mr-2">Total Price:</span>
                            <span>{formatCurrency(bookingData?.trip?.flight_price)}</span>
                        </div>
                        <div className='flex items-center'>
                            <span className="font-semibold mr-2">Extras Price:</span>
                            <span>{formatCurrency(bookingData?.extrasPrice)}</span>
                        </div>
                        <div className='flex items-center'>
                            <span className="font-semibold mr-2">
                                Hotel Price {formatCurrency(bookingData?.hotels?.pricePerNight)} * {formatCurrency(bookingData?.numNights)} Nights * {formatCurrency(bookingData?.numGuest)} guest + {formatCurrency(bookingData?.trip?.flight_price)} Flight Price + {formatCurrency(bookingData?.extrasPrice) ? formatCurrency(bookingData?.extrasPrice) : formatCurrency(0)} Extras Price
                            </span>
                        </div>
                        <div className='flex items-center'>
                            <span className="font-semibold mr-2">Total Price:</span>
                            <span>{formatCurrency(totalPrice)}</span>
                        </div>
                        <div className='flex items-center'>
                            <span className={`${bookingData?.isPaid ? 'text-green-500' : 'text-red-500'} uppercase text-xl`}>
                                {bookingData?.isPaid ? 'Paid' : 'Payable'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-end items-center gap-4 my-6">
                <button onClick={() => navigate(-1)} className='bg-slate-200 hover:bg-slate-300 rounded duration-200 transition-colors py-2 px-3'>
                    Close
                </button>
                <button onClick={() => deleteBooking(bookingData.id)} className='bg-red-500 hover:bg-red-600 rounded duration-200 transition-colors py-2 px-3 text-slate-100'>
                    Delete
                </button>
                {bookingData.status === 'unconfirmed' && (
                    <button onClick={() => checkin(bookingData.id, {
                        onSuccess: () => {
                            navigate('/bookings');
                        }
                    })} className='bg-indigo-500 hover:bg-indigo-600 rounded duration-200 transition-colors py-2 px-3 text-slate-100'>
                        Check in
                    </button>
                )}
                {bookingData.status === 'checked in' && (
                    <button onClick={() => checkout(bookingData.id, {
                        onSuccess: () => {
                            navigate('/bookings');
                        }
                    })} className='bg-indigo-500 hover:bg-indigo-600 rounded duration-200 transition-colors py-2 px-3 text-slate-100'>
                        Check out
                    </button>
                )}
            </div>
        </div>
    );
}

export default BookingDetails
