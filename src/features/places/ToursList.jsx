import { useState } from "react"
import { HiHeart, HiOutlineHeart, HiOutlineXMark } from "react-icons/hi2"
import Spinner from "../../ui/Spinner"
import { useAllPlaces } from "./useAllPlaces"
import { formatCurrency } from "../../utils/helpers"
import { useNavigate } from "react-router-dom"
import { usePlaceBookmarked } from "./usePlaceBookmarked"
import Modal from "../../ui/Modal"
import CreatePlace from "./CreatePlace"
import { useDeletePlace } from "./useDeletePlace"

function ToursList() {
    const [isBookmarked, setIsBookmarked] = useState(false)
    const { data, isLoading } = useAllPlaces()
    const navigate = useNavigate()
    const { bookmarked, isLoading: isLoading2 } = usePlaceBookmarked()

    const { deletePlace, isLoading3 } = useDeletePlace()

    const [showModal, setShowModal] = useState(false);


    function handleCloseModal() {
        setShowModal(false);
    }

    function handleDelete(id) {
        deletePlace(id)
    }


    function handleBookmark(id) {
        console.log(id);
        setIsBookmarked((bookmark) => !bookmark);

        // Log the updated state of the place object
        const updatedData = data.map((place) => {
            if (place.id === id) {
                const updatedPlace = { ...place, bookmarked: !place.bookmarked };
                console.log(updatedPlace);
                return updatedPlace;
            }
            return place;
        });

        console.log(updatedData);

        bookmarked({ isBookmarked, id });
    }


    if (isLoading || isLoading2 || isLoading3) return <Spinner />
    console.log(data)
    return (
        <div className="flex flex-col py-32 md:py-28">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-10 my-8">
                {data?.map((place) => (
                    <div key={place.id} className="bg-slate-100 p-4 hover:shadow-xl hover:bg-slate-200 transition-all duration-200 rounded-md relative cursor-pointer">
                        <button
                            onClick={() => handleDelete(place.id)}
                            className="absolute top-2 right-2 flex justify-center items-center text-red-500 cursor-pointer bg-white hover:bg-gray-100 duration-200 transition-colors w-8 h-8 rounded-full text-xl"
                        >
                            <HiOutlineXMark />
                        </button>
                        <img onClick={() => navigate(`/tours/${place?.id}`)} src={place?.mainImage} alt={place?.name} className="w-full h-40 py-1 px-1 rounded-lg hover:py-0 hover:px-0 duration-200 transition-all object-cover rounded-t-md" />
                        <div className="mt-4">
                            <h1 className="text-gray-800 font-semibold text-lg">{place?.name}</h1>
                            <p className="text-gray-600">{place?.located_at}</p>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-gray-800 font-semibold text-xl">{formatCurrency(place?.price)}</span>
                            <button onClick={() => handleBookmark(place?.id)} className='text-2xl font-semibold hover:text-red-400 duration-300 transition-colors'>
                                {place?.bookmarked ? <HiHeart className="text-red-500" /> : <HiOutlineHeart />}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center items-center'>
                <button onClick={() => setShowModal(true)} className='bg-orange-500 hover:bg-orange-600 duration-200 transition-colors rounded-md text-slate-100 py-2 px-3'>Add new place</button>
            </div>
            <Modal isOpen={showModal} closeModal={handleCloseModal}>
                <CreatePlace resourceName={'Place'} onConfirm={''} onClose={handleCloseModal} />
            </Modal>
        </div>
    )
}

export default ToursList
