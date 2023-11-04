import { NavLink } from "react-router-dom"

function MainNav({ isMenuOpen }) {

    return (
        <>
            <NavLink to='/'>
                <li className={`hover:text-orange-500 ${isMenuOpen && 'font-bold'} text-xs sm:text-sm lg:text-medium transition-colors duration-200 hover:font-semibold cursor-pointer`}>Discover</li>
            </NavLink>
            <NavLink to='/planTrip'>
                <li className={`hover:text-orange-500 text-xs ${isMenuOpen && 'font-bold'} sm:text-sm lg:text-medium transition-colors duration-200 hover:font-semibold cursor-pointer`}>Plan a trip</li>
            </NavLink>
            <NavLink to='/tours'>
                <li className={`hover:text-orange-500 text-xs ${isMenuOpen && 'font-bold'} sm:text-sm lg:text-medium transition-colors duration-200 hover:font-semibold cursor-pointer`}>All tours</li>
            </NavLink>
            <NavLink to='/hotelsPage'>
                <li className={`hover:text-orange-500 text-xs ${isMenuOpen && 'font-bold'} sm:text-sm lg:text-medium transition-colors duration-200 hover:font-semibold cursor-pointer`}>Hotels</li>
            </NavLink>
            <NavLink to='/bookings'>
                <li className={`hover:text-orange-500 text-xs ${isMenuOpen && 'font-bold'} sm:text-sm lg:text-medium transition-colors duration-200 hover:font-semibold cursor-pointer`}>Bookings</li>
            </NavLink>
        </>
    )
}

export default MainNav
