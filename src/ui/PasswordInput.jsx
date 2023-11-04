import { Input } from "postcss";
import { useState } from "react";
import { HiEyeSlash, HiOutlineEye } from "react-icons/hi2";

function PasswordInput({ register }) {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <Input
            label="Password"
            variant="bordered"
            placeholder="Enter your password"
            {...register('password', {
                required: 'This field is required',
            })}
            endContent={
                <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                        <HiOutlineEye className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                        <HiEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                    )}
                </button>
            }
            type={isVisible ? "text" : "password"}
            className="max-w-xs"

        />
    );
}

export default PasswordInput
