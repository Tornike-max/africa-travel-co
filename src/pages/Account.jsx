import EditAccount from "../features/authentication/EditAccount"
import EditPassword from "../features/authentication/EditPassword"

function Account() {
    return (
        <div className="flex flex-col justify-center items-center h-screen pt-36">
            <EditAccount />
            <EditPassword />
        </div>
    )
}

export default Account
