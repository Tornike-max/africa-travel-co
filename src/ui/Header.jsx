import { useLocation } from "react-router-dom";
import Icon from "./Icon"
import MainNav from "./MainNav"
import UserBox from "./UserBox"
import { useState } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import BurgerBar from "./BurgerBar";

function Header() {
    const { pathname } = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="absolute w-full z-50 px-10 my-4">
            <ul className={`hidden ${`md:flex`} flex justify-between items-center text-sm py-4 px-8 text-slate-50 font-medium ${pathname !== '/' ? 'bg-slate-800 rounded-md' : ''}`}>
                <Icon />
                <MainNav />
                <UserBox />
            </ul>

            <ul className={`flex flex-col justify-between gap-1 w-full ${pathname === '/' || pathname === '/planTrip' ? 'text-slate-500 font-bold' : ''} ${'md:hidden'}`}>
                <div className='flex justify-between items-center'>
                    <div className='text-orange-500'>
                        <BurgerBar />
                    </div>
                    <Icon />
                </div>

            </ul>
        </header>
    )
}

export default Header
