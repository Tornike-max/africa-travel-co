import { useForm } from "react-hook-form";
import { HiOutlineXCircle } from "react-icons/hi2";
import { useCreateHotel } from "./useCreateHotel";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";

function CreateHotelModal({ resourseName, onClose }) {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { create, isLoading } = useCreateHotel()

    function onSubmit(data) {
        if (!data) return;

        const image = data.image[0]; // Get the selected image file
        const newData = {
            hotelName: data.hotelName,
            description: data.description,
            facilities: data.facilities,
            pricePerNight: +data.pricePerNight,
            rooms: +data.rooms,
            rating: +data.rating,
            swimmingPool: data.swimmingPool,
            bookmarked: false,
            image: data?.image,
        };

        create({ ...newData, image }, {
            onSuccess: () => {
                navigate('/hotelsPage')
            }
        }); // Pass newData to the create function
    }

    if (isLoading) return <Spinner />

    return (
        <div className="bg-white rounded-lg p-8 max-w-xl w-screen shadow-xl">
            <div className="flex justify-end">
                <span onClick={onClose} className="text-3xl text-red-500 hover:text-red-600 duration-200 transition-colors cursor-pointer">
                    <HiOutlineXCircle />
                </span>
            </div>
            <h1 className="text-center text-xl font-semibold">{resourseName}</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hotelName">
                        Hotel Name
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-400"
                        type="text"
                        id="hotelName"
                        placeholder="Hotel Name"
                        {...register('hotelName', {
                            required: 'This field is required',
                        })}
                    />
                    {errors?.fullName && <span className="text-red-500 capitalize px-2">{errors.fullName.message}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="facilities">
                        Facilities
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-400"
                        type="text"
                        id="facilities"
                        placeholder="facilities"
                        {...register('facilities', {
                            required: 'This field is required',
                        })}
                    />
                    {errors?.facilities && <span className="text-red-500 capitalize px-2">{errors.facilities.message}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Price
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-400"
                        type="text"
                        id="price"
                        placeholder="pricePerNight"
                        {...register('pricePerNight', {
                            required: 'This field is required',
                        })}
                    />
                    {errors?.price && <span className="text-red-500 capitalize px-2">{errors.price.message}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="repeatPassword">
                        Rooms
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-400"
                        type="text"
                        id="rooms"
                        placeholder="Rooms"
                        {...register('rooms', {
                            required: 'This field is required',
                        })}
                    />
                    {errors?.rooms && <span className="text-red-500 capitalize px-2">{errors.rooms.message}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
                        Rating
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-400"
                        type="number"
                        id="rating"
                        placeholder="rating"
                        {...register('rating', {
                            required: 'This field is required',
                        })}
                    />
                    {errors?.rating && <span className="text-red-500 capitalize px-2">{errors.rating.message}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-400"
                        type="text"
                        id="description"
                        placeholder="description"
                        {...register('description', {
                            required: 'This field is required',
                        })}
                    />
                    {errors?.description && <span className="text-red-500 capitalize px-2">{errors.description.message}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                        Image
                    </label>
                    <input
                        className=" text-gray-700 focus:outline-none focus:border-blue-400"
                        type="file"
                        id="image"
                        placeholder="Image"
                        {...register('image', {
                            required: 'This field is required',
                        })}
                    />
                    {errors?.image && <span className="text-red-500 capitalize px-2">{errors.image.message}</span>}
                </div>
                <div className="flex items-center gap-2">
                    <label className="inline-flex items-center gap-2">
                        <span className="ml-2 text-gray-700">Swimming pool </span>
                        <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-orange-500"
                            id="swimmingPool"
                            placeholder="swimmingPool"
                            {...register('swimmingPool', {
                                required: 'This field is required',
                            })}
                        />

                    </label>
                    {errors?.swimmingPool && <span className="text-red-500 capitalize px-2">{errors.swimmingPool.message}</span>}
                </div>

                <div className="flex justify-end items-center gap-4">
                    <button className="py-2 px-4 text-slate-800 rounded-lg hover:bg-slate-100 transition-colors duration-200" onClick={onClose}>
                        Close
                    </button>
                    <button
                        className="py-2 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200"
                        type="submit"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );

}

export default CreateHotelModal
