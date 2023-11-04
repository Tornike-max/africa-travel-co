import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { useSingleTrip } from "./useSingleTrip";
import { useUpdateFlight } from "./useUpdateFlight";

function EditFlight() {
    const { flightId } = useParams()
    const { dataObj, isLoading } = useSingleTrip(flightId)
    const { edit, isEditing } = useUpdateFlight()

    const navigate = useNavigate()

    const { register, handleSubmit } = useForm()


    function onSubmit(data) {
        if (!data) return;

        const newFlight = {
            departure: data.departure,
            arrival: data.arrival,
            duration: Number(data.duration),
            flight_price: Number(data.flight_price),
            companyName: data.companyName,
            depart_time: data.depart_time
        };
        console.log(newFlight)
        edit({ newFlight, flightId })

    };

    if (isLoading || isEditing) return <Spinner />
    console.log(dataObj)

    return (
        <div className="container mx-auto pt-36 flex justify-center items-center flex-col py-8 px-10 ">

            <h2 className="text-3xl font-semibold mb-4 text-orange-500">Edit Flight</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-[500px] w-full">
                <div className="flex flex-col">
                    <input
                        type="text"
                        required
                        defaultValue={dataObj?.arrival}
                        placeholder="From"
                        className="input bg-slate-100 rounded-md py-2 px-3 "
                        {...register('arrival')}
                    />
                </div>
                <div className="flex flex-col">
                    <input
                        type="text"
                        required
                        defaultValue={dataObj?.departure}
                        placeholder="To"
                        className="input bg-slate-100 rounded-md py-2 px-3 "
                        {...register('departure')}
                    />
                </div>
                <div className="flex flex-col">
                    <input
                        type="number"
                        required
                        defaultValue={dataObj?.duration}
                        placeholder="Duration"
                        className="input bg-slate-100 rounded-md py-2 px-3 "
                        {...register('duration')}
                    />
                </div>
                <div className="flex flex-col">
                    <input
                        type="number"
                        required
                        defaultValue={dataObj?.flight_price}
                        placeholder="Price"
                        className="input bg-slate-100 rounded-md py-2 px-3 "
                        {...register('flight_price')}
                    />
                </div>

                <div className="flex flex-col">
                    <input
                        type='date'
                        required
                        defaultValue={dataObj?.depart_time}
                        placeholder="Depart Time"
                        className="input bg-slate-100 rounded-md py-2 px-3 "
                        {...register('depart_time')}
                    />
                </div>
                <div className="flex flex-col">
                    <input
                        type="text"
                        required
                        defaultValue={dataObj?.companyName}
                        placeholder="Company Name"
                        className="input bg-slate-100 rounded-md py-2 px-3 "
                        {...register('companyName')}
                    />
                </div>
                <div className="flex justify-end items-center gap-2">
                    <button onClick={() => navigate(-1)} type="button" className="flex items-center gap-1 bg-slate-200 py-2 px-3 rounded-md hover:bg-slate-300 duration-200 transition-colors">
                        <span>
                            <HiOutlineArrowLeft />
                        </span>
                        <span>
                            Go Back
                        </span>
                    </button>
                    <button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                        Edit Flight
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditFlight
