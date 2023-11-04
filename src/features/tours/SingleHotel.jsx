import { useNavigate, useParams } from "react-router-dom"
import { useGetHotel } from "./useGetHotel"
import Spinner from "../../ui/Spinner"
import { HiOutlineArrowLeft, HiOutlineCheckBadge, HiOutlineTrash } from "react-icons/hi2"
import { useDeleteHotel } from "./useDeleteHotel"
import { Button } from "@nextui-org/button"


function SingleHotel() {
    const navigate = useNavigate()
    const params = useParams()
    console.log(params)
    const { data, isLoading } = useGetHotel(params.hotelId)
    const { deleteHotel, isLoading: isDeleting } = useDeleteHotel()
    if (isLoading) return <Spinner />

    console.log(data)
    // const hotel = data[0]
    console.log(data)


    if (isDeleting) return <Spinner />
    return (
        <div className="bg-gray-100 py-32">
            <div className="container mx-auto space-y-2">
                <div className="flex justify-end px-4 md:justify-start">
                    <Button className='text-slate-800' onClick={() => navigate(-1)} color="primary" variant="faded">
                        <span>
                            <HiOutlineArrowLeft />
                        </span>
                        <span>Go Back</span>
                    </Button>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg">
                    <div className="flex justify-between items-center">
                        <img
                            src={data?.image}
                            alt={data?.hotelName}
                            className="w-24 h-24 hover:h-[98px] hover:w-[98px] sm:w-32 sm:h-32 sm:hover:h-[130px] sm:hover:w-[130px] md:w-40 md:h-40 md:hover:h-[162px] md:hover:w-[162px] lg:w-44 lg:h-44 lg:hover:h-[178px] lg:hover:w-[178px] object-cover opacity-95 hover:opacity-100 rounded-md   duration-200 transition-all"
                        />
                        <img
                            src={data?.singleImage1}
                            alt={data?.hotelName}
                            className="w-24 h-24 hover:h-[98px] hover:w-[98px] sm:w-32 sm:h-32 sm:hover:h-[130px] sm:hover:w-[130px] md:w-40 md:h-40 md:hover:h-[162px] md:hover:w-[162px] lg:w-44 lg:h-44 lg:hover:h-[178px] lg:hover:w-[178px] object-cover opacity-95 hover:opacity-100 rounded-md   duration-200 transition-all"
                        />
                        <img
                            src={data?.singleImage2}
                            alt={data?.hotelName}
                            className="w-24 h-24 hover:h-[98px] hover:w-[98px] sm:w-32 sm:h-32 sm:hover:h-[130px] sm:hover:w-[130px] md:w-40 md:h-40 md:hover:h-[162px] md:hover:w-[162px] lg:w-44 lg:h-44 lg:hover:h-[178px] lg:hover:w-[178px] object-cover opacity-95 hover:opacity-100 rounded-md   duration-200 transition-all"
                        />

                    </div>

                    <div className="mt-6 flex justify-center items-center flex-col font-medium">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">{data?.hotelName}</h1>
                        <p className="text-gray-600 mt-2">Rating: {data?.rating}</p>
                        <p className="text-gray-600 mt-2">Price per Night: ${data?.pricePerNight}</p>
                        <p className="text-gray-600 mt-2">
                            Facilities: {data?.facilities}
                        </p>
                        <p className="text-gray-600 mt-2">{data?.description}</p>
                    </div>

                    <div className="flex justify-end items-center gap-4 font-medium mt-4 text-slate-100">

                        <Button className='text-slate-800' onClick={() => navigate(-1)} color="primary" variant="ghost"
                            startContent={<HiOutlineArrowLeft />}>
                            Go Back
                        </Button>
                        <Button onClick={() => deleteHotel(data.id, {
                            onSuccess: () => {
                                navigate(-1)
                            }
                        })} color="danger" variant="ghost" startContent={<HiOutlineTrash />}>
                            Delete Hotel
                        </Button>
                        <Button color="primary" variant="ghost" startContent={<HiOutlineCheckBadge />}>
                            Check in
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleHotel
