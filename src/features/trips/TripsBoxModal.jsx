import { HiOutlineTrash, HiPencilSquare } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useDeleteFlight } from "./useDeleteFlight";
import Spinner from "../../ui/Spinner";

function TripsBoxModal({ trip }) {
    const { deleteFlight, isLoading } = useDeleteFlight()
    const navigate = useNavigate()


    function handleDelete(id) {
        deleteFlight(id)
    }
    if (isLoading) return <Spinner />


    return (

        <div className="bg-white rounded-lg py-2 px-8 shadow-xl">
            <div className="flex justify-end flex-col gap-2 ">
                <button onClick={() => navigate(`/editFlight/${trip.id}`)} className="text-blue-500 opacity-85 hover:opacity-100 hover:text-blue-700 duration-200 transition-colors text-xl flex items-center gap-4 w-full ">
                    <span><HiPencilSquare /></span>
                    <span>Edit</span>
                </button>
                <button onClick={() => handleDelete(trip.id)} className="text-red-500 hover:text-red-700 opacity-85 hover:opacity-100 duration-200 transition-colors text-xl flex items-center gap-4"><span><HiOutlineTrash /></span><span>Delete</span></button>
            </div>
        </div>

    );

}

export default TripsBoxModal
