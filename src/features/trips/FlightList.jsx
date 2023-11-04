import { HiOutlineEllipsisVertical } from "react-icons/hi2"
import TripsBoxModal from "./TripsBoxModal"
import SmallModal from "../../ui/SmallModal"
import { useState } from "react"
import { formatCurrency } from "../../utils/helpers"

function FlightList({ trip }) {
    const [isOpen, setIsOpen] = useState(false)
    const [position, setPosition] = useState({ top: 0, left: 0 }) // Initialize position

    function handleClose() {
        setIsOpen(false)
    }

    function handleGetPosition(e) {
        console.log(e.target.getBoundingClientRect())
        const rect = e.target.getBoundingClientRect(); // Get the button's position
        setPosition({ top: rect.bottom + 8, left: rect.left - 180 }); // Calculate the modal's position

        setIsOpen(open => !open)
    }
    return (
        <>
            <tr className="border-b border-gray-20 ">
                <td className="py-3 px-4 text-center">{trip?.id}</td>
                <td className="py-3 px-4 text-center hidden lg:table-cell">{trip?.created_at}</td>
                <td className="py-3 px-4 text-center hidden lg:table-cell">{trip?.depart_time}</td>
                <td className="py-3 px-4 text-center hidden sm:table-cell">{trip?.companyName}</td>
                <td className="py-3 px-4 text-center">{trip?.arrival}</td>
                <td className="py-3 px-4 text-center">{trip?.departure}</td>
                <td className="py-3 px-4 text-center hidden sm:table-cell">{trip?.duration} Hours</td>
                <td className="py-3 px-4 text-center hidden sm:table-cell">{formatCurrency(trip?.flight_price)}</td>
                <td className="flex justify-center items-center gap-2 pt-4">
                    <button onClick={(e) => handleGetPosition(e)} className='text-xl font-semibold text-black'><HiOutlineEllipsisVertical /></button>

                    <SmallModal isOpen={isOpen} position={position} closeModal={handleClose}>
                        <TripsBoxModal trip={trip} onClose={handleClose} />
                    </SmallModal>
                </td>
            </tr>
        </>
    )
}

export default FlightList
