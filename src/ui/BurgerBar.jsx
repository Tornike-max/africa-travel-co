import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Radio, RadioGroup } from "@nextui-org/react";
import { useState } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

function BurgerBar() {
    const [selectedColor, setSelectedColor] = useState("default")

    const variants = ["light", "flat", "faded", "shadow"];

    const DropdownContent = ({ variant, color }) => (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    color={color}
                    variant={variant}
                    className="capitalize"
                >
                    {variant}
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Dropdown Variants"
                color={color}
                variant={variant}
            >
                <DropdownItem key="new">
                    <NavLink to='/'>
                        {/* <li className={`hover:text-orange-500 ${isMenuOpen && 'font-bold'} text-xs sm:text-sm lg:text-medium transition-colors duration-200 hover:font-semibold cursor-pointer`}>Discover</li> */}
                        <li className={`hover:text-orange-500  text-xs sm:text-sm lg:text-medium transition-colors duration-200 hover:font-semibold cursor-pointer`}>Discover</li>
                    </NavLink>
                </DropdownItem>
                <DropdownItem key="new">
                    <NavLink to='/planTrip'>
                        {/* <li className={`hover:text-orange-500 text-xs ${isMenuOpen && 'font-bold'} sm:text-sm lg:text-medium transition-colors duration-200 hover:font-semibold cursor-pointer`}>Plan a trip</li> */}
                        <li className={`hover:text-orange-500 text-xs  sm:text-sm lg:text-medium transition-colors duration-200 hover:font-semibold cursor-pointer`}>Plan a trip</li>
                    </NavLink>
                </DropdownItem>
                <DropdownItem key="new">
                    <NavLink to='/tours'>
                        {/* <li className={`hover:text-orange-500 text-xs ${isMenuOpen && 'font-bold'} sm:text-sm lg:text-medium transition-colors duration-200 hover:font-semibold cursor-pointer`}>All tours</li> */}
                        <li className={`hover:text-orange-500 text-xs  sm:text-sm lg:text-medium transition-colors duration-200 hover:font-semibold cursor-pointer`}>All tours</li>
                    </NavLink>
                </DropdownItem>
                <DropdownItem key="new">
                    <NavLink to='/hotelsPage'>
                        {/* <li className={`hover:text-orange-500 text-xs ${isMenuOpen && 'font-bold'} sm:text-sm lg:text-medium transition-colors duration-200 hover:font-semibold cursor-pointer`}>Hotels</li> */}
                        <li className={`hover:text-orange-500 text-xs  sm:text-sm lg:text-medium transition-colors duration-200 hover:font-semibold cursor-pointer`}>Hotels</li>
                    </NavLink>
                </DropdownItem>
                <DropdownItem key="new">
                    <NavLink to='/bookings'>
                        {/* <li className={`hover:text-orange-500 text-xs ${isMenuOpen && 'font-bold'} sm:text-sm lg:text-medium transition-colors duration-200 hover:font-semibold cursor-pointer`}>Bookings</li> */}
                        <li className={`hover:text-orange-500 text-xs sm:text-sm lg:text-medium transition-colors duration-200 hover:font-semibold cursor-pointer`}>Bookings</li>
                    </NavLink>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )

    return (
        <div className="flex flex-wrap gap-1 ml-[-30px]">
            <DropdownContent color={'orange'} variant={<HiBars3BottomLeft />} />
        </div>
    );
}

export default BurgerBar
