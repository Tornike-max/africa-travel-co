import { useTrips } from "./useTrips"
import Spinner from "../../ui/Spinner"
import FlightList from "./FlightList"
import { useNavigate } from "react-router-dom"

function AllFlights() {
    const { data, isLoading } = useTrips()
    const navigate = useNavigate()

    if (isLoading) return <Spinner />
    console.log(data)

    return (
        <>
            <div className="pt-36 px-8 h-screen">
                <div>
                    <button onClick={() => navigate(-1)} className='py-2 px-3 mb-4 rounded-md bg-slate-100 hover:bg-slate-200 duration-200 transition-colors text-slate-800'>Go Back</button>
                </div>
                <table className="min-w-full text-slate-700 border-[1px] border-slate-300 py-4">
                    <thead>
                        <tr className='border-b-2'>
                            <th>ID</th>
                            <th className='hidden lg:table-cell'>Created</th>
                            <th className='hidden lg:table-cell'>Depart Time</th>
                            <th className="hidden sm:table-cell">Company Name</th>
                            <th>Arrival</th>
                            <th>Departure</th>
                            <th className='hidden sm:table-cell'>Duration</th>
                            <th className='hidden sm:table-cell'>Flight Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(trip =>
                            <FlightList trip={trip} key={trip.id} />
                        )}
                    </tbody>
                </table>

                <div className="flex justify-center items-center py-4">
                    <button onClick={() => navigate('/createFlight')} className='py-2 px-3 rounded-md bg-orange-500 hover:bg-orange-600 duration-200 transition-colors text-slate-100'>Create New Flight</button>
                </div>
            </div>


        </>
    )
}

export default AllFlights
