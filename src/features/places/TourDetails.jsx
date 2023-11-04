import { useNavigate, useParams } from "react-router-dom"
import { useGetPlace } from "./useGetPlace"
import Spinner from "../../ui/Spinner"
import { useUpdateStatus } from "./useUpdateStatus"
import { useState } from "react"
import { formatCurrency } from "../../utils/helpers"
import { HiOutlineCheckBadge } from "react-icons/hi2"

function TourDetails() {
    const { tourId } = useParams()
    const { dataObj, isLoading } = useGetPlace(tourId)
    const navigate = useNavigate()
    const { mutate, isLoading: isLoading2 } = useUpdateStatus()

    const [isBooked, setIsBooked] = useState(false)
    const [status, setStatus] = useState(false)


    function handleChangeStatus(id) {
        setIsBooked(booked => !booked)
        setStatus(status => !status)
        mutate({ isBooked, status: status ? 'confirmed' : 'unconfirmed', id })
    }

    if (isLoading || isLoading2) return <Spinner />
    console.log(dataObj)

    return (
        <div className="flex h-screen overflow-hidden">

            <div className="w-1/2 flex flex-col justify-center items-center font-serif md:pt-20 lg:pt-28">
                <div className="font-medium max-w-[500px] w-full capitalize mb-4 flex flex-col items-end md:items-start gap-2 px-4">
                    <button disabled={isLoading2} onClick={() => navigate(-1)} className="py-1 px-1 text-xs sm:text-sm sm:px-2 md:py-2 md:px-3  rounded-md bg-slate-100 hover:bg-slate-200 duration-200 transition-colors text-slate-800">Go Back</button>
                </div>
                <div className={`font-medium max-w-[500px] w-full capitalize mb-4 flex flex-col items-start gap-2`}>
                    <h1 className={`font-semibold text-sm capitalize  lg:text-medium text-center w-full md:text-left px-4 `}>{dataObj.name}</h1>
                    <span className='text-xs sm:text-sm lg:text-xs text-slate-400 text-center w-full md:text-left px-4'>{dataObj?.located_at}</span>
                    <span className='text-xs sm:text-sm lg:text-xs text-slate-400 text-center w-full md:text-left px-4'>{dataObj?.location}</span>
                </div>
                <div className={`font-medium max-w-[500px] w-full capitalize mb-4 hidden lg:flex flex-col items-start gap-2`}>
                    <h1 className={`font-semibold text-lg capitalize  lg:text-medium text-center w-full md:text-left px-4 `}>Biodiversity</h1>
                    <span className='text-xs sm:text-sm lg:text-xs text-slate-400 text-center w-full md:text-left px-4 '>{dataObj?.biodiversity}</span>
                </div>
                <div className={`font-medium max-w-[500px] w-full capitalize mb-4 flex flex-col items-start gap-2`}>
                    <h1 className={`font-semibold text-sm sm:text-medium capitalize  lg:text-medium text-center w-full md:text-left px-4 `}>Tour Price</h1>
                    <p className='text-xs sm:text-sm lg:text-xs text-slate-400 text-center w-full md:text-left px-4  flex items-center gap-2'>
                        <span>Price: {formatCurrency(dataObj.price)}</span>
                        <span>{dataObj?.isBooked ? <HiOutlineCheckBadge className='text-green-300 text-xl' /> : ''}</span>
                    </p>
                </div>
                <div className="font-medium max-w-[500px] w-full capitalize mb-4 items-end justify-end md:justify-start md:items-start gap-3 flex px-4">
                    <button disabled={isLoading2} onClick={() => navigate(-1)} className="py-1 px-1 sm:px-2 md:py-2 md:px-3 text-xs sm:text-sm md:text-medium rounded-md bg-slate-100 hover:bg-slate-200 duration-200 transition-colors text-slate-800">Go Back</button>
                    <button onClick={() => handleChangeStatus(dataObj.id)} disabled={isLoading2} className="py-1 px-1 sm:px-2 md:py-2 md:px-3 text-xs sm:text-sm md:text-medium rounded-md bg-orange-500 hover:bg-orange-600 duration-200 transition-colors text-slate-100">{dataObj.isBooked ? 'Delete Booking' : 'Book Now'}</button>
                </div>
            </div>
            <div className="w-1/2 bg-blue-400">
                <img
                    src={dataObj?.image}
                    alt={dataObj?.name}
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    )
}

export default TourDetails
