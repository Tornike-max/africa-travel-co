import { HiOutlineArrowRightOnRectangle, HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useUser } from "../features/authentication/useUser";
import { useLogout } from "../features/authentication/useLogout";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Switch, User } from "@nextui-org/react";
import { useDarkMode } from "../context/DarkModeContext";

function UserBox() {
    const { isDark, changeDarkMode } = useDarkMode()
    const { pathname } = useLocation();

    const { mutate, isLoading } = useLogout()
    const { userName, email } = useUser()
    const name = userName.split(' ')[0]
    console.log(isDark)
    return (
        <div className="flex items-center gap-3 text-xl capitalize font-bold">

            {/* <button onClick={() => navigate('/account')} className='hover:text-orange-500 duration-300 transition-colors'>
                <HiOutlineUser />
            </button> */}
            <NavLink to='/account'>
                <User className='text-slate-100'
                    name={name}
                    description={(
                        <Link to='/account' className='text-[9px] text-slate-100 ' >
                            {email}
                        </Link>
                    )}
                    avatarProps={{
                        src: "https://avatars.githubusercontent.com/u/30373425?v=4"
                    }}
                />
            </NavLink>
            <div className="flex items-center gap-2">

                <Switch
                    defaultSelected
                    className={`${pathname === '/planTrip' || pathname === '/' ? 'hidden' : 'block'}`}
                    onChange={changeDarkMode}
                    size="lg"
                    color="secondary"
                    thumbIcon={({ isSelected, className }) =>
                        isSelected ? (
                            <HiOutlineMoon className={className} />)
                            : (
                                <HiOutlineSun className={className} />
                            )
                    }
                />

                <button disabled={isLoading} onClick={() => mutate()} className='hover:text-purple-500 text-2xl duration-300 transition-colors'>
                    <HiOutlineArrowRightOnRectangle />
                </button>

            </div>
        </div>
    )
}

export default UserBox
