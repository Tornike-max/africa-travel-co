import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Spinner } from "@nextui-org/react"
import { HiOutlineBackward, HiOutlineCheckBadge, HiOutlineEllipsisVertical, HiOutlineEye, HiOutlineTrash } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useCheckin } from "../features/booking/useCheckin";
import { useCheckout } from "../features/booking/useCheckout";
import { useDelete } from "../features/booking/useDelete";


function DropDown({ bookingId, booking }) {
    const navigate = useNavigate()
    const { checkin, isLoading } = useCheckin()
    const { checkout, isLoading: isLoading2 } = useCheckout()
    const { deleteBooking, isDeleting } = useDelete()

    const loading = isLoading || isLoading2 || isDeleting;

    if (loading) return <Spinner />

    function handleNavigateDetails(bookingId) {
        navigate(`/bookings/${bookingId}`)
    }
    const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="bordered"
                >
                    <HiOutlineEllipsisVertical />
                </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
                <DropdownItem
                    onClick={() => handleNavigateDetails(bookingId)}
                    key="new"
                    shortcut="⌘S"
                    description="See Details"
                    startContent={<HiOutlineEye className={iconClasses} />}
                >
                    See Details
                </DropdownItem>
                {booking.status === 'unconfirmed' &&
                    <DropdownItem
                        onClick={() => checkin(bookingId)}
                        key="copy"
                        shortcut="⌘C"
                        description="Checkin"
                        startContent={<HiOutlineCheckBadge className={iconClasses} />}
                    >
                        Check in
                    </DropdownItem>}
                {booking.status === 'checked in' && <DropdownItem
                    key="edit"
                    onClick={() => checkout(bookingId)}
                    shortcut="⌘C"
                    showDivider
                    description="Check Out"
                    startContent={<HiOutlineBackward className={iconClasses} />}
                >
                    Check out
                </DropdownItem>}
                <DropdownItem
                    key="delete"
                    onClick={() => deleteBooking(bookingId)}
                    className="text-danger text-xl"
                    color="danger"
                    shortcut="⌘D"
                    description="Delete"
                    startContent={<HiOutlineTrash className={(iconClasses, "text-danger")} />}
                >
                    Delete file
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default DropDown
