import { useForm } from "react-hook-form"
import { useRecover } from "./useRecover"
import { useNavigate } from "react-router-dom"

function ChangePassword() {
    const { register, formState: { errors }, handleSubmit, getValues } = useForm()
    const { change, isLoading } = useRecover()
    const navigate = useNavigate()

    function onSubmit(data) {
        console.log(data)
        if (!data) return
        const { email } = data
        change(email)
    }
    return (
        <div className="flex h-screen overflow-hidden">
            <div className="w-1/2 bg-blue-400">
                <img
                    src="./login-img/update.jpg"
                    alt="African girl"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="w-1/2 flex flex-col justify-center items-center bg-gray-100 p-8">
                <div className="font-medium max-w-[450px] w-full text-2xl capitalize mb-8">
                    <h1>Password Recovery</h1>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
                    <div className="mb-4">
                        <input
                            type="password"
                            placeholder="password"
                            id="password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            {...register('password', {
                                required: 'This field is required',
                            })}
                        />
                        {errors?.password?.message && (
                            <span className="text-red-500">{errors?.password?.message}</span>
                        )}
                    </div>

                    <div className="mb-6">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            id="repeatPassword"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            {...register('repeatPassword', {
                                required: 'This field is required',
                                validate: (value) =>
                                    value === getValues('password') || 'Passwords should match',
                            })}
                        />
                        {errors?.repeatPassword?.message && (
                            <span className="text-red-500">{errors?.repeatPassword?.message}</span>
                        )}
                    </div>

                    <div className="text-right">
                        <button
                            disabled={isLoading}
                            onClick={() => navigate(-1)}
                            type="button"
                            className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Reset Password
                        </button>
                        <button
                            disabled={isLoading}
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Reset Password
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default ChangePassword
