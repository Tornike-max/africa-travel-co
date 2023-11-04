import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { useLogin } from "./useLogin"
import { Button } from "@nextui-org/button"
import Icon from "../../ui/Icon"

function Login() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const { mutate: login, isLoading } = useLogin()

    function onSubmit(data) {
        console.log(data)
        login(data, {
            onSuccess: () => {
                navigate('/')
                reset()
            }
        })
    }
    return (
        <div className={`flex h-screen overflow-hidden`}>
            <div className="w-1/2 bg-blue-400">
                <img
                    src="./login-img/login.jpg"
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
                    <div className={`mb-4`}>
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

                    <div className="flex justify-end items-end flex-col lg:justify-between lg:items-center lg-flex-row">
                        <div className="flex items-center gap-1 text-xs sm:text-sm md:text-md">
                            <span className="text-slate-500 text-xs sm:text-sm md:text-md">Don't have an account?</span>
                            <button type='button' onClick={() => navigate('/signup')} className="text-orange-500 font-medium text-xs sm:text-sm md:text-md">Sign up</button>
                        </div>
                        <div className=" flex gap-4 justify-end items-center text-xs sm:text-sm md:text-md">
                            <Link to='/sendEmail'>Forget password?</Link>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <Button
                            variant="shadow"
                            disabled={isLoading}
                            className="px-2 py-1 mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md"
                            type="submit"
                        >
                            Login
                        </Button>
                    </div>
                </form>
            </div>
        </div>



    )
}

export default Login
