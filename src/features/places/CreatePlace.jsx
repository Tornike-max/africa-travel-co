import { useForm } from "react-hook-form"
import { HiOutlineXCircle } from "react-icons/hi2"
import { useCreatePlace } from "./useCreatePlace";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";

function CreatePlace({ onClose, resourseName }) {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { mutate, isLoading } = useCreatePlace()
    const navigate = useNavigate()

    function onSubmit(data) {
        if (!data) return;
        const mainImage = data?.mainImage[0]
        const image = data?.image[0]

        const newData = {
            name: data?.name,
            location: data?.location,
            biodiversity: data?.biodiversity,
            price: data?.price,
            mainImage: data?.mainImage,
            image: data?.image,
            status: 'unconfirmed',
            bookmarked: false,
            isBooked: false,
            located_at: 'eastern coast of Africa',
        }
        console.log(newData, mainImage, image)
        mutate({ ...newData, image, mainImage }, {
            onSuccess: () => {
                navigate('/tours')
            }
        })
    }

    if (isLoading) return <Spinner />
    return (
        <div className="bg-white rounded-lg p-8 max-w-xl w-screen shadow-xl">
            <div className="flex justify-end">
                <span onClick={onClose} className="text-3xl text-red-500 hover:text-red-600 duration-200 transition-colors cursor-pointer">
                    <HiOutlineXCircle />
                </span>
            </div>
            <h1 className="text-center text-xl font-semibold text-orange-500">{resourseName}</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Place Name
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-400"
                        type="text"
                        id="name"
                        placeholder="Place Name"
                        {...register('name', {
                            required: 'This field is required',
                        })}
                    />
                    {errors?.name && <span className="text-red-500 capitalize px-2">{errors.name.message}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                        Location
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-400"
                        type="text"
                        id="location"
                        placeholder="Location"
                        {...register('location', {
                            required: 'This field is required',
                        })}
                    />
                    {errors?.location && <span className="text-red-500 capitalize px-2">{errors.location.message}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="biodiversity">
                        Biodiversity
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-400"
                        type="text"
                        id="Biodiversity"
                        placeholder="biodiversity"
                        {...register('biodiversity', {
                            required: 'This field is required',
                        })}
                    />
                    {errors?.biodiversity && <span className="text-red-500 capitalize px-2">{errors.biodiversity.message}</span>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Price
                    </label>
                    <input
                        className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-400"
                        type="number"
                        id="Price"
                        placeholder="price"
                        {...register('price', {
                            required: 'This field is required',
                        })}
                    />
                    {errors?.price && <span className="text-red-500 capitalize px-2">{errors.price.message}</span>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstImage">
                        First image
                    </label>
                    <input
                        className="text-gray-700 focus:outline-none focus:border-blue-400"
                        type="file"
                        id="firstImage"
                        placeholder="First Image"
                        {...register('mainImage', {
                            required: 'This field is required',
                        })}
                    />
                    {errors?.mainImage && <span className="text-red-500 capitalize px-2">{errors.mainImage.message}</span>}
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

                <div className="flex justify-end items-center gap-4">
                    <button disabled={isLoading}
                        className="py-2 px-4 text-slate-800 rounded-lg hover:bg-slate-100 transition-colors duration-200" onClick={onClose}>
                        Close
                    </button>
                    <button
                        disabled={isLoading}
                        className="py-2 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200"
                        type="submit"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreatePlace
