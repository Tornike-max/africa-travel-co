import { Spinner } from "@nextui-org/react"
import { useStateBookings } from "./useStatBookings"
import { useState } from "react";
import StatList from "./StatList";

function BookingStats() {
    const { data, isLoading } = useStateBookings()

    const [page, setPage] = useState(1);
    const rowsPerPage = 4;
    const pages = Math.ceil(data?.length / rowsPerPage);

    if (isLoading) return <Spinner />
    const newData = data.map(users => {
        return {
            status: users?.status,
            name: users?.guests?.fullName,
            role: users?.hotels?.hotelName,
            key: crypto.randomUUID(),
        }
    })
    console.log(data)
    console.log(newData)

    return (
        <div className={`w-full `}>
            <h2 className="text-center text-2xl py-4 font-semibold text-indigo-500">Bookings</h2>
            <StatList data={newData} pages={pages} page={page} setPage={setPage} rowsPerPage={rowsPerPage} />
        </div>
    )
}

export default BookingStats
