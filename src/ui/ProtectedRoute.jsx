import { useNavigate } from "react-router-dom"
import { useUser } from "../features/authentication/useUser"
import Spinner from "./Spinner"

function ProtectedRoute({ children }) {
    const navigate = useNavigate()
    const { data, isLoading, authenticated } = useUser()

    if (isLoading) return <Spinner />

    if (!authenticated && !isLoading) {
        navigate('/login')
        return null
    };
    console.log(data)

    if (authenticated) return children
}

export default ProtectedRoute
