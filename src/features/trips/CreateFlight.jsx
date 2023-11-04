import { useForm } from "react-hook-form";
import { useCreateTrip } from "./useCreateTrip";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi2";

function CreateFlight() {
    const navigate = useNavigate()
    const { mutate, isLoading } = useCreateTrip()

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
        mutate({ newFlight }, {
            onSettled: () => {
                navigate('/allFlight')
            }
        });
    };

    if (isLoading) return <Spinner />

    return (
        <div className="container mx-auto pt-36 flex justify-center items-center flex-col py-8 px-10 ">

            <h2 className="text-3xl font-semibold mb-4 text-orange-500">Create Flight</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-[500px] w-full">
                <div className="flex flex-col">
                    <input
                        type="text"
                        required
                        placeholder="From"
                        className="input bg-slate-100 rounded-md py-2 px-3 "
                        {...register('arrival', {
                            required: 'This field is required'
                        })}
                    />
                </div>
                <div className="flex flex-col">
                    <input
                        type="text"
                        required
                        placeholder="To"
                        className="input bg-slate-100 rounded-md py-2 px-3 "
                        {...register('departure', {
                            required: 'This field is required'
                        })}
                    />
                </div>
                <div className="flex flex-col">
                    <input
                        type="number"
                        required
                        placeholder="Duration"
                        className="input bg-slate-100 rounded-md py-2 px-3 "
                        {...register('duration', {
                            required: 'This field is required'
                        })}
                    />
                </div>
                <div className="flex flex-col">
                    <input
                        type="number"
                        required
                        placeholder="Price"
                        className="input bg-slate-100 rounded-md py-2 px-3 "
                        {...register('flight_price', {
                            required: 'This field is required'
                        })}
                    />
                </div>

                <div className="flex flex-col">
                    <input
                        type='date'
                        required
                        placeholder="Depart Time"
                        className="input bg-slate-100 rounded-md py-2 px-3 "
                        {...register('depart_time', {
                            required: 'This field is required'
                        })}
                    />
                </div>
                <div className="flex flex-col">
                    <input
                        type="text"
                        required
                        placeholder="Company Name"
                        className="input bg-slate-100 rounded-md py-2 px-3 "
                        {...register('companyName', {
                            required: 'This field is required'
                        })}
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
                        Create Trip
                    </button>
                </div>
            </form>
        </div>

    );
}

export default CreateFlight
