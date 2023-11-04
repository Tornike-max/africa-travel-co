import { HiHeart, HiOutlineHeart, HiOutlineXMark } from "react-icons/hi2"
import { useDeleteHotel } from "./useDeleteHotel"
import Spinner from "../../ui/Spinner"
import { useBookmarked } from "./useBookmarked"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function HotelsList({ card, isDark }) {
    const navigate = useNavigate()
    const [isBookmarked, setIsBookmarked] = useState(false)
    const { deleteHotel, isLoading } = useDeleteHotel()
    const { bookmarked, isLoading: isBookmarking } = useBookmarked()
    function handleDelete(id) {
        console.log('click', id)
        deleteHotel(id)
    }

    function handleBookmark(id) {
        console.log(id)

        setIsBookmarked(bookmark => !bookmark)
        bookmarked({ isBookmarked, id })
    }


    function handleSingleHotel(id) {
        if (!id) return;
        console.log(id)
        navigate(`/hotelsPage/${id}`)
    }


    if (isLoading || isBookmarking) return <Spinner />
    return (
        <div key={card.id} className={`duration-300 transition-all ${isDark ? 'bg-slate-700 hover:bg-slate-800' : 'bg-slate-50'} p-4 hover:p-3 shadow-lg hover:bg-slate-100 transition-all duration-200 rounded-md relative`}>
            <button
                onClick={() => handleDelete(card.id)}
                className="absolute top-2 right-2 flex justify-center items-center text-red-500 cursor-pointer bg-slate-50 hover:bg-slate-100 duration-200 transition-colors w-8 h-8 rounded-full text-xl"
            >
                <HiOutlineXMark />
            </button>
            <img src={card.image} alt='' className="w-full h-auto" />
            <div className="mt-4 px-2 flex flex-col justify-start items-start gap-2">
                <div className="flex justify-between items-center w-full">
                    <h1 className={`duration-200 transition-all ${isDark ? 'text-slate-200' : 'text-slate-800'} font-semibold`}>{card.hotelName}</h1>
                    <p className='px-2 py-2 bg-slate-300 rounded-md font-medium'>{card.rating}</p>
                </div>
                <p className={`duration-200 transition-all ${isDark ? 'text-slate-200' : 'text-slate-800'} font-medium`}>{card.description}</p>
                <button onClick={() => handleSingleHotel(card.id)} className='px-2 py-1 bg-slate-800 rounded-lg text-slate-200 cursor-pointer hover:bg-slate-900 duration-200 transition-colors'>Select</button>
                <span className={`duration-200 transition-all ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{card.facilities}</span>
                <span className={`duration-200 transition-all ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{card.rooms} Room</span>
                <span className={`duration-200 transition-all ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>Per Night</span>
                <div className="flex justify-between items-center w-full">
                    <span className={`duration-200 transition-all ${isDark ? 'text-slate-200' : 'text-slate-800'} font-semibold text-2xl`}>${card.pricePerNight}</span>
                    <button onClick={() => handleBookmark(card.id)} className='text-2xl font-semibold hover:text-red-400 duration-300 transition-colors'>
                        {isBookmarked ? <HiHeart className={`duration-200 transition-all ${isDark ? 'text-red-500 ' : 'text-red-500'}`} /> : <HiOutlineHeart />}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HotelsList
