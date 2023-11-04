import { useState } from "react";
import BookingBoxModal from "./BookingBoxModal";
import SmallModal from "../../ui/SmallModal";
import DropDown from "../../ui/DropDown";

function BookingRow({ booking, isDark }) {
    const [isOpen, setIsOpen] = useState(false)
    const [position] = useState({ top: 0, left: 0 }) // Initialize position

    function handleClose() {
        setIsOpen(false)
    }

    return (
        <>
            <tr key={booking.id} className={`duration-300 transition-all ${isDark ? 'bg-slate-700 hover:text-slate-800' : 'bg-white'}  hover:bg-gray-100`}>
                <td className="px-6 py-4 text-center border-b">{booking.id}</td>
                <td className="px-6 py-4 text-center border-b hidden md:table-cell">{new Date(booking.startDate).toDateString()}</td>
                <td className="px-6 py-4 text-center border-b hidden md:table-cell">{new Date(booking.endDate).toDateString()}</td>
                <td className="px-6 py-4 text-center font-semibold border-b">{booking.guests.fullName}</td>
                <td className="px-6 py-4 text-center border-b hidden lg:table-cell">{booking.numNights} Night</td>
                <td className='hidden sm:table-cell'>
                    <p className={`capitalize px-3 py-2 text-center rounded-full font-semibold border-b ${booking.status === 'unconfirmed' || booking.status === 'checked out' ? 'bg-gray-300 text-gray-600' : 'bg-green-500 text-white'}`}>
                        {booking.status}
                    </p>
                </td>
                <td className="px-6 py-4 text-center  border-b hidden sm:table-cell">{booking.trip.companyName}</td>
                <td className="px-4 py-2 text-center border-b">
                    <DropDown booking={booking} bookingId={booking.id} />
                </td>
                <SmallModal isOpen={isOpen} position={position} closeModal={handleClose}>
                    <BookingBoxModal booking={booking} onClose={handleClose} />
                </SmallModal>
            </tr>
        </>
    )
}

export default BookingRow