import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useSignup } from "./useSignup"
import Spinner from "../../ui/Spinner"
import Icon from "../../ui/Icon"

function Signup() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, getValues, reset } = useForm()
    const { mutate: signup, isLoading } = useSignup()
    function onSubmit(data) {
        console.log(data)
        signup(data, {
            onSuccess: () => {
                navigate('/login')
                reset()
            }
        })
    }

    if (isLoading) return <Spinner />
    return (
        <div className="flex h-screen overflow-hidden">
            <div className="w-1/2 bg-blue-400">
                <img
                    src="./login-img/signup.jpg"
                    alt="African girl"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center px-8">
                <div className='flex justify-center items-center py-4'>
                    <Icon />
                </div>

                <div className="font-medium text-center sm:text-left max-w-[500px] w-full text-md md:text-xl capitalize mb-4">
                    <h1>Sign in with email</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg w-full">
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Full Name"
                            id="fullName"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            {...register('fullName', {
                                required: 'This field is required'
                            })}
                        />
                        {errors?.fullName?.message && <span className="text-red-500">{errors?.fullName?.message}</span>}
                    </div>

                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            {...register('email', {
                                required: 'This field is required'
                            })}
                        />
                        {errors?.email?.message && <span className="text-red-500">{errors?.email?.message}</span>}
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            {...register('password', {
                                required: 'This field is required'
                            })}
                        />
                        {errors?.password?.message && <span className="text-red-500">{errors?.password?.message}</span>}
                    </div>

                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="Repeat Password"
                            id="repeatPassword"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            {...register('repeatPassword', {
                                required: 'This field is required',
                                validate: (value) => value === getValues('password') || 'Password should match'
                            })}
                        />
                        {errors?.repeatPassword?.message && <span className="text-red-500">{errors?.repeatPassword?.message}</span>}
                    </div>

                    <div className="flex gap-2 items-center justify-end">
                        <button onClick={() => navigate('/login')} type='button'
                            className="mt-4 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold py-1 px-1 text-sm sm:px-2 sm:text-medium  md:py-2 md:px-3 rounded-md duration-200 transition-colors">
                            Go Back
                        </button>
                        <button
                            disabled={isLoading}
                            className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold  py-1 px-1 text-sm sm:px-2 sm:text-medium  md:py-2 md:px-3 rounded-md duration-200 transition-colors"
                            type="submit"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>



    )
}

export default Signup
