import { useForm } from "react-hook-form"
import { useRecover } from "./useRecover"
import Spinner from "../../ui/Spinner"
import { useNavigate } from "react-router-dom"
import Icon from "../../ui/Icon"

function AuthEmail() {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const { change, isLoading } = useRecover()
    const navigate = useNavigate()

    function onSubmit(data) {
        if (!data) return
        const { email } = data
        change(email)
    }

    if (isLoading) return <Spinner />

    return (
        <div className="flex h-screen overflow-hidden">
            <div className="w-1/2 bg-blue-400">
                <img
                    src="./login-img/update.jpg"
                    alt="African girl"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center px-8">
                <div className='flex justify-center items-center py-4'>
                    <Icon />
                </div>
                <div className="font-medium text-center sm:text-left max-w-[500px] w-full text-md md:text-xl capitalize mb-4">
                    <h1>Send Email</h1>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Email"
                            id="email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            {...register('email', {
                                required: 'This field is required',
                            })}
                        />
                        {errors?.email?.message && (
                            <span className="text-red-500">{errors?.email?.message}</span>
                        )}
                    </div>


                    <div className="text-right flex items-center gap-2 justify-end">
                        <button
                            disabled={isLoading}
                            onClick={() => navigate('/login')}
                            type="button"
                            className="mt-4 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold py-1 px-1 text-sm sm:px-2 sm:text-medium  md:py-2 md:px-3 rounded-md duration-200 transition-colors">
                            Go Back
                        </button>
                        <button
                            disabled={''}
                            type="submit"
                            className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold  py-1 px-1 text-sm sm:px-2 sm:text-medium  md:py-2 md:px-3 rounded-md duration-200 transition-colors"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default AuthEmail
