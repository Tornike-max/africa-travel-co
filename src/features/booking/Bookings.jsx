import { useBookings } from "./useBookings"
import Spinner from '../../ui/Spinner'
import BookingRow from "./BookingRow"
import { Button } from "@nextui-org/button"
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2"
import { useSearchParams } from "react-router-dom"
import { useState } from "react"
import { NUM_PAGE } from "../../utils/constants"
import { useDarkMode } from "../../context/DarkModeContext"


function Bookings() {
    const { isDark } = useDarkMode()
    const [searchParams, setSearchParams] = useSearchParams()
    const [page, setPage] = useState(!searchParams.get("page") ? 1 : Number(searchParams.get("page")))
    const { bookings, isLoading, count } = useBookings()


    if (isLoading) return <Spinner />

    function handleNextPage(e) {
        e.preventDefault()
        searchParams.set('page', Number(page + 1))
        setSearchParams(searchParams)
        return Number(setPage(page => page + 1))
    }

    function handlePrevPage(e) {
        e.preventDefault()
        searchParams.set('page', Number(page - 1))
        setSearchParams(searchParams)
        return Number(setPage(page => page - 1))
    }

    const maxPageLength = count / NUM_PAGE
    const from = Number(page) === 1 ? 1 : Number(page - 1) * NUM_PAGE;
    const to = Number(page) * NUM_PAGE;


    return (
        <div className={`${isDark ? 'bg-slate-900' : ''} pt-36 px-8 h-screen`}>
            <table className={`min-w-full duration-300 transition-all ${isDark ? 'text-slate-300 border-slate-700' : 'text-slate-800 border-slate-300'}  border-[1px] `}>
                <thead>
                    <tr className={`border-b-2 ${isDark ? 'border-slate-600' : 'border-slate-300'}`}>
                        <th>ID</th>
                        <th className='hidden md:table-cell'>Start Date</th>
                        <th className='hidden md:table-cell'>End Date</th>
                        <th>Guest Name</th>
                        <th className="hidden lg:table-cell">Nights</th>
                        <th className="hidden sm:table-cell">Status</th>
                        <th className='hidden sm:table-cell'>Company Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className={`duration-300 transition-all ${isDark ? 'text-slate-300' : 'text-slate-800'}`}>
                    {bookings.map((booking) => (
                        <BookingRow isDark={isDark} key={booking.id} booking={booking} />
                    ))}
                </tbody>
            </table>
            <footer className={` ${isDark ? 'bg-slate-900' : ''} min-w-full py-4 px-6 mb-8 mt-4 flex justify-between items-center flex-col sm:flex-row`}>
                <p className={`font-medium text-lg ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>Showing <span>{from}</span> to <span>{to}</span> of <span>{count}</span> results</p>

                <div className='flex items-center gap-3'>
                    <Button disabled={page === 1} onClick={handlePrevPage} startContent={<HiOutlineArrowLeft />} color="primary" variant={`${isDark ? 'shaddow' : 'bordered'}`} className={` hover:text-slate-100 border-orange-400 ${isDark ? 'text-slate-200 hover:bg-indigo-500 ' : 'text-slate-800 hover:bg-orange-500'}`}>
                        Previous
                    </Button>
                    <Button disabled={page === maxPageLength} onClick={handleNextPage} endContent={<HiOutlineArrowRight />} color="primary" variant={`${isDark ? 'shaddow' : 'bordered'}`} className={` hover:text-slate-100 border-orange-400 ${isDark ? 'text-slate-200 hover:bg-indigo-500' : 'text-slate-800 hover:bg-orange-500'}`}>
                        Next
                    </Button>
                </div>

            </footer>
        </div>
    )
}

export default Bookings
