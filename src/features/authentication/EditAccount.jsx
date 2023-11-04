import { useForm } from "react-hook-form"
import { useUser } from "./useUser"
import { useUpdateAccount } from "./useUpdateAccount"
import Spinner from "../../ui/Spinner"
import { Button, Input } from "@nextui-org/react";

function EditAccount() {
    const { userName, email } = useUser()
    const { updateName, isUpdating } = useUpdateAccount()
    const { register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            fullName: userName,
            email: email,
        }
    })

    function onSubmit(data) {
        console.log(data)
        if (!data) return;
        updateName(data)
    }



    if (isUpdating) return <Spinner />

    return (
        <div className="max-w-lg w-full p-6 bg-white rounded-lg shadow-lg mb-4">
            <h1 className="text-2xl text-center mb-4">Update Account Information</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <Input
                        label="Full Name"
                        variant="bordered"
                        className="w-full px-3 py-2"
                        placeholder="Full Name"
                        {...register('fullName', {
                            required: 'This field is required'
                        })} />
                    {errors?.fullName && <span className="text-red-500 text-sm">{errors.fullName.message}</span>}
                </div>
                <div>


                    <Input
                        readOnly
                        label="Email"
                        variant="bordered"
                        className="w-full px-3 py-2"
                        placeholder="Email"
                        {...register('email', {
                            required: 'This field is required'
                        })} />
                    {errors?.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                </div>
                <div className="flex justify-end">

                    <Button className='bg-orange-500 text-slate-100' type="submit" color="success">
                        Update
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default EditAccount
