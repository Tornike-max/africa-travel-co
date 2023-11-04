import { useForm } from "react-hook-form"
import { useUpdatePassword } from "./useUpdatePassword"
import { Button, Input } from "@nextui-org/react";
import { useState } from "react"
import { HiEyeSlash, HiOutlineEye } from "react-icons/hi2"

function EditPassword() {
    const { updatePass, isUpdating } = useUpdatePassword()
    const { register, formState: { errors }, handleSubmit, getValues } = useForm()
    const [isVisible, setIsVisible] = useState(false);
    const [isVisiblRepeat, setIsVisiblRepeat] = useState(false);


    const toggleVisibility = () => setIsVisible(!isVisible);
    const toggleRepeatPassVisibility = () => setIsVisiblRepeat(!isVisiblRepeat)

    function onSubmit(data) {
        console.log('click')
        if (!data) return;
        const { password } = data
        updatePass({ password })
    }
    return (
        <div className="max-w-lg w-full p-6 bg-white rounded-lg shadow-lg mb-4">
            <h1 className="text-2xl text-center mb-4">Update Password</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <Input
                        label="Password"
                        variant="bordered"
                        className="w-full px-3 py-2"
                        placeholder="Enter your password"
                        {...register('password', {
                            required: 'This field is required',
                        })}
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                {isVisible ? (
                                    <HiEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                                ) : (
                                    <HiOutlineEye className="text-2xl text-default-400 pointer-events-none" />
                                )}
                            </button>
                        }
                        type={isVisible ? "text" : "password"}
                    />
                    {errors?.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                </div>
                <div>

                    <Input
                        label="Password"
                        variant="bordered"
                        className="w-full px-3 py-2"
                        placeholder="Confirm Password"
                        {...register('repeatPassword', {
                            required: 'This field is required',
                            validate: (value) => value === getValues().password || 'Passwords should match',
                        })}
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={toggleRepeatPassVisibility}>
                                {isVisiblRepeat ? (
                                    <HiEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                                ) : (
                                    <HiOutlineEye className="text-2xl text-default-400 pointer-events-none" />
                                )}
                            </button>
                        }
                        type={isVisiblRepeat ? "text" : "password"}

                    />
                    {errors?.repeatPassword && <span className="text-red-500 text-sm">{errors.repeatPassword.message}</span>}
                </div>
                <div className="flex justify-end">
                    <Button disabled={isUpdating} className='bg-orange-500 text-slate-100' type="submit" color="success">
                        Update
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default EditPassword
